import React from "react";
import {
  FaCalendarAlt,
  FaMusic,
  FaHandsHelping,
  FaPrayingHands,
  FaMicrophone,
} from "react-icons/fa";
import "./Events.css";

const events = [
  {
    id: 1,
    icon: <FaCalendarAlt />,
    title: "Sunday Worship Experience",
    date: "Every Sunday · 9:00 AM",
    description: "A powerful time of worship, teaching, and fellowship.",
  },
  {
    id: 2,
    icon: <FaMicrophone />,
    title: "Night Vigil",
    date: "Last Friday of the Month · 10:00 PM",
    description: "An atmosphere of praise, prayer, and spiritual renewal.",
  },
  {
    id: 3,
    icon: <FaPrayingHands />,
    title: "End of the year Revival",
    date: "Quarterly Program",
    description: "Reaching out with love and practical support.",
  },
];

const Events = () => {
  return (
    <section className="events">
      <h2>Upcoming Events</h2>

      <div className="featured-event">
        <div className="featured-content">
          <span className="featured-badge">Featured Event</span>
          <h3>ALTAR OF PRAISE</h3>
          <p>
            A powerful gathering filled with worship, praises, dances and the
            Word. Come expecting a divine encounter and spiritual renewal.
          </p>

          <div className="featured-meta">
            <FaCalendarAlt />
            <span>September · 9:00 PM</span>
          </div>

          <a href="#" className="btn primary">
            View Event Details
          </a>
        </div>

        <div className="featured-image">
          <img src="./photo1.jpg" alt="Praise and worship" />
        </div>
      </div>

      <div className="events-grid">
        {events.map(({ id, icon, title, date, description }) => (
          <div key={id} className="event-card">
            <div className="event-header">
              <span className="event-icon">{icon}</span>
              <span className="event-date">{date}</span>
            </div>

            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
