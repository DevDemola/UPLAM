import React from "react";
import "./LandingPage.css";
import { FaUsers, FaFemale, FaMale, FaMusic } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const LandingPage = () => {
  return (
    <main>
      {/* ---------------- HERO ---------------- */}
      <section className="hero" style={{ backgroundImage: "url(/Her.jpeg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="hero-overlay" /> {/* soft dark overlay for contrast */}
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1>Where Faith Meets Community</h1>
          <p>
            Join us in worship, grow in faith, and experience a welcoming family rooted in God’s Words.
          </p>
          <div className="hero-actions">
            <motion.a
              href="/services"
              className="btn primary"
              whileHover={{ scale: 1.05 }}
            >
              Join Us This Sunday
            </motion.a>
            <motion.a
              href="#sermon"
              className="btn secondary"
              whileHover={{ scale: 1.05 }}
            >
              Watch Latest Sermon
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="services">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Worship With Us
        </motion.h2>

        <div className="services-layout">
          <motion.div
            className="service-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>
              Join us for uplifting moments of worship, teaching, and prayer throughout the week:
            </p>

            <ul className="service-list">
              <li>
                <strong>Sunday Service:</strong> 9:00 AM – Worship, Word & Fellowship
              </li>
              <li>
                <strong>Midweek Service:</strong> Tuesday · 6:00 PM – Bible Study & Teaching
              </li>
              <li>
                <strong>Prayer Meeting:</strong> Thursday · 9:00 AM – WayOut program
              </li>
            </ul>

            <motion.a href="#events" className="btn secondary mt-4" whileHover={{ scale: 1.05 }}>
              See All Events
            </motion.a>
          </motion.div>

          <motion.div
            className="services-image"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src="/photo2.jpg" alt="Church service" className="rounded-xl shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* ---------------- EXPECT ---------------- */}
      <section className="expect">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          What To Expect
        </motion.h2>

        <motion.div className="expect-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {[
            ["Warm Welcome", "You’ll be greeted with love from the moment you arrive."],
            ["Spirit-Led Worship", "Uplifting worship that draws hearts closer to God."],
            ["Bible-Based Teaching", "Practical messages rooted in God’s Word."],
            ["Come As You Are", "No pressure. Just come and experience God’s presence."],
          ].map(([title, text], index) => (
            <motion.div key={index} className="expect-card hover-card" variants={fadeUp}>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section className="about">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Who We Are
        </motion.h2>

        <div className="about-layout">
          <motion.div className="about-text" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p>
              We are a Christ-centered church committed to teaching the truth of God’s Word and nurturing a community where lives are genuinely transformed. Our heart is to create a place where people can encounter God, grow in faith, and experience His love in a real and personal way. Through sound biblical teaching, sincere worship, and strong fellowship, we equip believers to live with purpose and confidence.
            </p>
          </motion.div>

          <motion.div className="about-image" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src="./photo5.jpg" alt="Church worship" className="rounded-xl shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* ---------------- MINISTRIES ---------------- */}
      <section className="ministries">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Our Ministries
        </motion.h2>

        <motion.div className="ministry-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {[FaUsers, FaFemale, FaMale, FaMusic].map((Icon, index) => (
            <motion.div key={index} className="ministry-card hover-card" variants={fadeUp}>
              <Icon className="ministry-icon" />
              <h3>{
                ["Youth Ministry", "Women Fellowship", "Men Fellowship", "Choir & Worship Team"][index]
              }</h3>
              <p className="ministry-desc">Join and grow in fellowship with like-minded believers.</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ---------------- SERMON ---------------- */}
      <section className="sermon" id="sermon">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Featured Sermon
        </motion.h2>

        <motion.div className="sermon-card hover-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <img src="./photo6.jpg" alt="Sermon" className="rounded-xl shadow-lg" />
          <div className="sermon-content">
            <h3>Walking in Faith</h3>
            <p>A powerful message on trusting God in every season.</p>
            <motion.a href="#" className="btn primary" whileHover={{ scale: 1.05 }}>
              Watch Sermon
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="cta" >
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="cta-content">
          <h2>You Are Welcome Here</h2>
          <p>No matter where you’re coming from, there’s a place for you.</p>

          <motion.a
            href="https://wa.me/2347040151940"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
            whileHover={{ scale: 1.05 }}
          >
            Talk to Us on WhatsApp
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
};

export default LandingPage;
