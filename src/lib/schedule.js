import { gatherings } from "../data/schedule";
import { site, fullAddress } from "../data/site";

/** Lagos is UTC+1 all year (no daylight saving). */
const LAGOS_OFFSET_MS = 60 * 60 * 1000;
const TZ = "Africa/Lagos";
const DAY_MS = 24 * 60 * 60 * 1000;

/** Wall-clock fields for an instant, as seen in Lagos. */
function lagosParts(ms) {
  const d = new Date(ms + LAGOS_OFFSET_MS);
  return { y: d.getUTCFullYear(), m: d.getUTCMonth(), d: d.getUTCDate(), wd: d.getUTCDay() };
}

/** UTC instant for a Lagos wall-clock time. */
function lagosToUtc(y, m, d, hour, minute) {
  return Date.UTC(y, m, d, hour, minute) - LAGOS_OFFSET_MS;
}

function isLastWeekdayOfMonth(y, m, d) {
  const daysInMonth = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
  return d + 7 > daysInMonth;
}

/**
 * Next (or currently running) occurrence of a gathering.
 * @returns {{ start: Date, end: Date, live: boolean }}
 */
export function nextOccurrence(g, now = Date.now()) {
  for (let i = 0; i < 70; i++) {
    const { y, m, d, wd } = lagosParts(now + i * DAY_MS);
    if (wd !== g.weekday) continue;
    if (g.rule === "lastOfMonth" && !isLastWeekdayOfMonth(y, m, d)) continue;
    const start = lagosToUtc(y, m, d, g.hour, g.minute);
    const end = start + g.durationMins * 60 * 1000;
    if (end <= now) continue;
    return { start: new Date(start), end: new Date(end), live: start <= now };
  }
  return null;
}

/** All gatherings with their next date, soonest first. */
export function upcomingGatherings(now = Date.now()) {
  return gatherings
    .map((g) => ({ ...g, next: nextOccurrence(g, now) }))
    .filter((g) => g.next)
    .sort((a, b) => a.next.start - b.next.start);
}

const timeFmt = new Intl.DateTimeFormat("en-NG", { timeZone: TZ, hour: "numeric", minute: "2-digit", hour12: true });
const weekdayFmt = new Intl.DateTimeFormat("en-NG", { timeZone: TZ, weekday: "long" });
const shortDateFmt = new Intl.DateTimeFormat("en-NG", { timeZone: TZ, weekday: "short", day: "numeric", month: "short" });

export const formatTime = (date) => timeFmt.format(date).replace(/\s?(am|pm)/i, (s) => " " + s.trim().toUpperCase());
export const formatShortDate = (date) => shortDateFmt.format(date);

/** "Today", "Tomorrow" or the weekday name, relative to Lagos time. */
export function relativeDay(date, now = Date.now()) {
  const a = lagosParts(now);
  const b = lagosParts(date.getTime());
  const diff = Math.round((Date.UTC(b.y, b.m, b.d) - Date.UTC(a.y, a.m, a.d)) / DAY_MS);
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  return weekdayFmt.format(date);
}

const DAY_CODES = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
const pad = (n) => String(n).padStart(2, "0");

/** Builds a recurring .ics calendar file for a gathering. */
export function buildIcs(g) {
  const next = nextOccurrence(g);
  const { y, m, d } = lagosParts(next.start.getTime());
  const endMins = g.hour * 60 + g.minute + g.durationMins;
  const endDay = new Date(Date.UTC(y, m, d) + Math.floor(endMins / 1440) * DAY_MS);
  const local = (yy, mm, dd, mins) =>
    `${yy}${pad(mm + 1)}${pad(dd)}T${pad(Math.floor(mins / 60) % 24)}${pad(mins % 60)}00`;
  const rrule =
    g.rule === "lastOfMonth"
      ? `FREQ=MONTHLY;BYDAY=-1${DAY_CODES[g.weekday]}`
      : `FREQ=WEEKLY;BYDAY=${DAY_CODES[g.weekday]}`;
  const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+/, "");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//UPLAM//Church Website//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VTIMEZONE",
    `TZID:${TZ}`,
    "BEGIN:STANDARD",
    "DTSTART:19700101T000000",
    "TZOFFSETFROM:+0100",
    "TZOFFSETTO:+0100",
    "TZNAME:WAT",
    "END:STANDARD",
    "END:VTIMEZONE",
    "BEGIN:VEVENT",
    `UID:${g.id}@uplam`,
    `DTSTAMP:${stamp}`,
    `DTSTART;TZID=${TZ}:${local(y, m, d, g.hour * 60 + g.minute)}`,
    `DTEND;TZID=${TZ}:${local(endDay.getUTCFullYear(), endDay.getUTCMonth(), endDay.getUTCDate(), endMins % 1440)}`,
    `RRULE:${rrule}`,
    `SUMMARY:${g.title} · ${site.shortName}`,
    `DESCRIPTION:${g.description.replace(/,/g, "\\,")}`,
    `LOCATION:${fullAddress.replace(/,/g, "\\,")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function downloadIcs(g) {
  const blob = new Blob([buildIcs(g)], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `uplam-${g.id}.ics`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
