import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Where Faith Meets Community</h1>
          <p>
            Join us in worship, grow in faith, and experience a welcoming family
            rooted in God’s Word.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn primary">
              Join Us This Sunday
            </a>
            <a href="#sermons" className="btn secondary">
              Watch Latest Sermon
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE TIMES */}
      {/* SERVICES */}
<section className="services" id="services">
  <h2>Worship With Us</h2>
  <div className="service-grid">
    <div className="service-card">
      <h3>Sunday Service</h3>
      <p>9:00 AM – Experience joyful worship and teaching from the Word.</p>
    </div>
    <div className="service-card">
      <h3>Midweek Service</h3>
      <p>Wednesday · 6:00 PM – Connect, pray, and grow in community.</p>
    </div>
    <div className="service-card">
      <h3>Prayer Meeting</h3>
      <p>Friday · 5:30 PM – Join us for heartfelt prayer and fellowship.</p>
    </div>
  </div>
</section>

{/* ABOUT */}
<section className="about">
  <h2>Who We Are</h2>
  <p>
    We are a Christ-centered church committed to teaching God’s Word and
    building a community where everyone can grow spiritually. Our mission
    is to welcome, equip, and empower people to live out their faith daily.
  </p>
</section>


      {/* CALL TO ACTION */}
      <section className="cta">
        <h2>You Are Welcome Here</h2>
        <p>No matter where you’re coming from, there’s a place for you.</p>
        <a
          href="https://wa.me/234XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="btn primary"
        >
          Talk to Us on WhatsApp
        </a>
      </section>
    </main>
  );
};

export default LandingPage;
