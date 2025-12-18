import React from "react";
import { FaChurch, FaBible, FaPrayingHands, FaUsers } from "react-icons/fa";
import "./Services.css";

const   services = [
  {
    id: 1,
    icon: <FaChurch />,
    title: "Sunday Service",
    description: "9:00 AM – Experience joyful worship and teaching from the Word.",
  },
  {
    id: 2,
    icon: <FaPrayingHands />,
    title: "Midweek Service",
    description: "Wednesday · 6:00 PM – Connect, pray, and grow in community.",
  },
  {
    id: 3,
    icon: <FaBible />,
    title: "Bible Study",
    description: "Thursday · 7:00 PM – Deepen your understanding of God’s Word.",
  },
  {
    id: 4,
    icon: <FaUsers />,
    title: "Prayer Meeting",
    description: "Friday · 5:30 PM – Join us for heartfelt prayer and fellowship.",
  },
];

const Services= () => {
  return (
    <section className="services-page">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="service-cta">
        <h3>Come Join Us!</h3>
        <p>All are welcome. Worship with us and grow in community.</p>
        <a href="#hero" className="btn primary">Join Us This Sunday</a>
      </div>
    </section>
  );
};

export default Services;
