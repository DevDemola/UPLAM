import { FiArrowUpRight, FiCalendar, FiMapPin, FiPhone, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { site, fullAddress, directionsUrl, mapEmbedUrl, telUrl, whatsappUrl } from "../data/site";
import { upcomingGatherings, formatTime, formatShortDate, relativeDay, downloadIcs } from "../lib/schedule";
import { useNow } from "../lib/hooks";
import { Button, Reveal, Photo } from "./ui";
import "./blocks.css";

/** List of recurring gatherings with their next date and add-to-calendar. */
export function GatheringsList({ compact = false }) {
  const now = useNow();
  const items = upcomingGatherings(now);
  return (
    <ul role="list" className={`gatherings${compact ? " gatherings--compact" : ""}`}>
      {items.map((g) => (
        <li key={g.id} className="gathering">
          <div className="gathering__when">
            <span className="gathering__day">{g.next.live ? "Now" : relativeDay(g.next.start, now)}</span>
            <span className="gathering__time">{formatTime(g.next.start)}</span>
          </div>
          <div className="gathering__body">
            <h3>
              {g.title}
              {g.next.live && <span className="live-pill">Live now</span>}
            </h3>
            <p>{compact ? g.summary : g.description}</p>
            {!compact && (
              <p className="gathering__meta">
                <FiClock aria-hidden="true" />
                {g.rule === "lastOfMonth" ? "Last Friday of every month" : `Every ${new Intl.DateTimeFormat("en", { weekday: "long", timeZone: "Africa/Lagos" }).format(g.next.start)}`}
                {" · next on "}
                {formatShortDate(g.next.start)}
              </p>
            )}
          </div>
          {!compact && (
            <button className="gathering__cal" onClick={() => downloadIcs(g)} aria-label={`Add ${g.title} to your calendar`}>
              <FiCalendar aria-hidden="true" />
              <span>Add to calendar</span>
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Address, map and practical info — the "Plan your visit" block. */
export function VisitSection({ id = "visit" }) {
  return (
    <section className="section visit" id={id} aria-labelledby={`${id}-title`}>
      <div className="container visit__grid">
        <Reveal className="visit__info">
          <p className="eyebrow">Plan your visit</p>
          <h2 id={`${id}-title`}>We’ve saved you a seat.</h2>
          <p className="lede">
            First time? Come as you are. Our ushers will meet you at the door, help you find a seat and
            introduce your little ones to SEEDS, our kids church.
          </p>

          <GatheringsList compact />

          <div className="visit__address">
            <FiMapPin aria-hidden="true" />
            <div>
              <strong>{site.address.line1}</strong>
              <span>
                {site.address.line2}, {site.address.city}
              </span>
            </div>
          </div>

          <div className="visit__actions">
            <Button href={directionsUrl} icon={<FiArrowUpRight />}>
              Get directions
            </Button>
            <Button href={whatsappUrl("Hello UPLAM! I'm planning to visit this Sunday.")} variant="ghost" iconLeft={<FaWhatsapp />}>
              Let us know you’re coming
            </Button>
          </div>
        </Reveal>

        <Reveal className="visit__map" delay={0.1}>
          <iframe
            title={`Map to ${site.name}`}
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a className="visit__map-link" href={directionsUrl} target="_blank" rel="noopener noreferrer">
            <FiMapPin aria-hidden="true" /> Open in Google Maps
          </a>
          <span className="visit__map-note" aria-hidden="true">
            {fullAddress}
          </span>
        </Reveal>
      </div>
    </section>
  );
}

/** Closing call-to-action band with photo. */
export function CtaBand({
  title = "There’s a place for you here.",
  text = "Whatever your story and wherever you’re coming from, you are welcome in this family.",
  image = "photo8",
}) {
  return (
    <section className="cta-band">
      <div className="container">
        <Reveal className="cta-band__card">
          <div className="cta-band__media" aria-hidden="true">
            <Photo name={image} alt="" sizes="(min-width: 900px) 40vw, 100vw" />
          </div>
          <div className="cta-band__body">
            <p className="eyebrow eyebrow--light">You are welcome</p>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="cta-band__actions">
              <Button to="/#visit" variant="light">
                Plan a visit
              </Button>
              <Button href={whatsappUrl()} variant="outline-light" iconLeft={<FaWhatsapp />}>
                WhatsApp us
              </Button>
              <Button href={telUrl} variant="outline-light" iconLeft={<FiPhone />}>
                Call
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
