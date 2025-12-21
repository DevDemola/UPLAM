import React from "react";
import "./LandingPage.css";
import { FaUsers, FaFemale, FaMale, FaMusic } from "react-icons/fa";
const LandingPage = () => {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-content">
          <h1>Where Faith Meets Community</h1>
          <p>
            Join us in worship, grow in faith, and experience a welcoming family
            rooted in God’s Words.
          </p>

          <div className="hero-actions">
            <a href="#services" className="btn primary">
              Join Us This Sunday
            </a>
            <a href="#sermon" className="btn secondary">
              Watch Latest Sermon
            </a>
          </div>
        </div>
      </section>

      <section className="services">
        <h2>Worship With Us</h2>

        <div className="services-layout">
          {/* Left: Text */}
          <div className="service-text">
            <p>
              Join us for uplifting moments of worship, teaching, and prayer
              throughout the week:
            </p>

            <ul className="service-list">
              <li>
                <strong className="strong">Sunday Service:</strong> 9:00 AM –
                Worship, Word & fellowship.
              </li>
              <li>
                <strong className="strong">Midweek Service:</strong> Tuesday ·
                6:00 PM – Bible Study & Teaching.
              </li>
              <li>
                <strong className="strong">Prayer Meeting:</strong> Thursday ·
                9:00 AM – WayOut program.
              </li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="services-image">
            <img src="/photo2.jpg" alt="Church service" />
          </div>
        </div>
      </section>

      <section className="expect">
        <h2>What To Expect</h2>

        <div className="expect-grid">
          <div className="expect-card">
            <h3>Warm Welcome</h3>
            <p>You’ll be greeted with love from the moment you arrive.</p>
          </div>

          <div className="expect-card">
            <h3>Spirit-Led Worship</h3>
            <p>Uplifting worship that draws hearts closer to God.</p>
          </div>

          <div className="expect-card">
            <h3>Bible-Based Teaching</h3>
            <p>Practical messages rooted in God’s Word.</p>
          </div>

          <div className="expect-card">
            <h3>Come As You Are</h3>
            <p>No pressure. Just come and experience God’s presence.</p>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="about">
        <h2>Who We Are</h2>

        <div className="about-layout">
          {/* Left: Text */}
          <div className="about-text">
            <p>
              We are a Christ-centered church passionate about teaching God’s
              Word and building a community where lives are transformed.
            </p>
            <p>
              Our mission is to welcome, equip, and empower believers to live
              out their faith daily.
            </p>
            <ul className="about-list">
              <li>
                <strong className="strong">Faithful Teaching:</strong> Grounded
                in the Word of God.
              </li>
              <li>
                <strong className="strong">Community:</strong> Building lasting
                relationships.
              </li>
              <li>
                <strong className="strong">Empowerment:</strong> Helping
                believers live purposefully.
              </li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="about-image">
            <img src="./photo5.jpg" alt="Church worship" />
          </div>
        </div>
      </section>

      <section className="ministries">
        <h2>Our Ministries</h2>

        <div className="ministry-grid">
          <div className="ministry-card">
            <FaUsers className="ministry-icon" />
            Youth Ministry
          </div>
          <div className="ministry-card">
            <FaFemale className="ministry-icon" />
            Women Fellowship
          </div>
          <div className="ministry-card">
            <FaMale className="ministry-icon" />
            Men Fellowship
          </div>
          <div className="ministry-card">
            <FaMusic className="ministry-icon" />
            Choir & Worship Team
          </div>
        </div>
      </section>

      {/* ================= FEATURED SERMON ================= */}
      <section className="sermon" id="sermon">
        <h2>Featured Sermon</h2>

        <div className="sermon-card">
          <img src="./photo6.jpg" alt="Sermon" />
          <div className="sermon-content">
            <h3>Walking in Faith</h3>
            <p>A powerful message on trusting God in every season.</p>
            <a href="#" className="btn primary">
              Watch Sermon
            </a>
          </div>
        </div>
      </section>

      {/* <section className="testimonial">
        <p>
          “This church gave me a place to grow spiritually and find genuine
          community. It truly feels like home.”
        </p>
        <h4>— Church Member</h4>
      </section> */}

      {/* ================= CTA ================= */}
      <section className="cta">
        <h2>You Are Welcome Here</h2>
        <p>No matter where you’re coming from, there’s a place for you.</p>

        <a
          href="https://wa.me/2347040151940"
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
