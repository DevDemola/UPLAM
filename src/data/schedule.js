/**
 * Recurring gatherings. Times are local Lagos time (WAT, UTC+1).
 * weekday: 0 = Sunday … 6 = Saturday
 * rule: "weekly" | "lastOfMonth"
 */
export const gatherings = [
  {
    id: "sunday",
    title: "Sunday Service",
    summary: "Worship, the Word & fellowship",
    weekday: 0,
    hour: 9,
    minute: 0,
    durationMins: 180,
    rule: "weekly",
    description:
      "Our main gathering of the week — Spirit-led worship, practical Bible teaching, prayer and fellowship.",
  },
  {
    id: "bible-study",
    title: "Midweek Bible Study",
    summary: "Teaching & discussion",
    weekday: 2,
    hour: 18,
    minute: 0,
    durationMins: 90,
    rule: "weekly",
    description: "An evening in the Word — going deeper into scripture together, with room for questions.",
  },
  {
    id: "wayout",
    title: "WayOut Prayer Meeting",
    summary: "Prayer & intercession",
    weekday: 4,
    hour: 9,
    minute: 0,
    durationMins: 120,
    rule: "weekly",
    description: "A morning set apart for prayer — bring your needs, and stand with others in theirs.",
  },
  {
    id: "vigil",
    title: "Night Vigil",
    summary: "Praise, prayer & renewal",
    weekday: 5,
    hour: 22,
    minute: 0,
    durationMins: 420,
    rule: "lastOfMonth",
    description: "On the last Friday of every month we stay up in praise and prayer through the night.",
  },
];

export const specialEvents = [
  {
    id: "altar-of-praise",
    featured: true,
    title: "Altar of Praise",
    when: "Annual praise night · 9:00 PM",
    description:
      "A night given wholly to worship — praise, dance and the Word. Come expecting a divine encounter and fresh joy.",
    image: "photo22",
  },
  {
    id: "anniversary",
    title: "Church Anniversary",
    when: "Every September",
    description:
      "A thanksgiving celebration of God's faithfulness to our church family — 15 years and counting.",
    image: "photo17",
  },
  {
    id: "revival",
    title: "End of Year Revival",
    when: "December",
    description:
      "We close the year in worship, the Word and prayer, and step into the new one with expectation.",
    image: "photo7",
  },
];
