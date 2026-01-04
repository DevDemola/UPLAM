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
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const LandingPage = () => {
  return (
    <main>
      <section className="hero">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
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
        </motion.div>
      </section>

      <section className="services">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
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
          </motion.div>

          <motion.div
            className="services-image"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src="/photo2.jpg" alt="Church service" />
          </motion.div>
        </div>
      </section>

      <section className="expect">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          What To Expect
        </motion.h2>

        <motion.div
          className="expect-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            [
              "Warm Welcome",
              "You’ll be greeted with love from the moment you arrive.",
            ],
            [
              "Spirit-Led Worship",
              "Uplifting worship that draws hearts closer to God.",
            ],
            [
              "Bible-Based Teaching",
              "Practical messages rooted in God’s Word.",
            ],
            [
              "Come As You Are",
              "No pressure. Just come and experience God’s presence.",
            ],
          ].map(([title, text], index) => (
            <motion.div key={index} className="expect-card" variants={fadeUp}>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="about">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Who We Are
        </motion.h2>

        <div className="about-layout">
          <motion.div
            className="about-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>
              We are a Christ-centered church committed to teaching the truth of
              God’s Word and nurturing a community where lives are genuinely
              transformed. Our heart is to create a place where people can
              encounter God, grow in faith, and experience His love in a real
              and personal way. Through sound biblical teaching, sincere
              worship, and strong fellowship, we equip believers to live with
              purpose and confidence. Our mission is to welcome, equip, and
              empower people to walk out their faith daily, impacting their
              families, communities, and the world for Christ.
            </p>
          </motion.div>

          <motion.div
            className="about-image"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src="./photo5.jpg" alt="Church worship" />
          </motion.div>
        </div>
      </section>

      <section className="ministries">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our Ministries
        </motion.h2>

        <motion.div
          className="ministry-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[FaUsers, FaFemale, FaMale, FaMusic].map((Icon, index) => (
            <motion.div key={index} className="ministry-card" variants={fadeUp}>
              <Icon className="ministry-icon" />
              {
                [
                  "Youth Ministry",
                  "Women Fellowship",
                  "Men Fellowship",
                  "Choir & Worship Team",
                ][index]
              }
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="sermon" id="sermon">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Featured Sermon
        </motion.h2>

        <motion.div
          className="sermon-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src="./photo6.jpg" alt="Sermon" />
          <div className="sermon-content">
            <h3>Walking in Faith</h3>
            <p>A powerful message on trusting God in every season.</p>
            <a href="#" className="btn primary">
              Watch Sermon
            </a>
          </div>
        </motion.div>
      </section>

      <section className="cta">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
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
        </motion.div>
      </section>
    </main>
  );
};

export default LandingPage;
