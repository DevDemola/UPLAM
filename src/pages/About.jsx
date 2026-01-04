import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const leaders = [
  {
    id: 1,
    name: "Late Prophet S.S Osho (JP)",
    role: "Founder/G.O",
    img: "./photo6.jpg",
  },
  {
    id: 2,
    name: "Lady Evang F.T Osho (JP)",
    role: "Mummy G.O",
    img: "./photo6.jpg",
  },
  {
    id: 3,
    name: "Pastor I.O Osho",
    role: "Active Lead Pastor",
    img: "./photo6.jpg",
  },
  {
    id: 4,
    name: "Asst Pastor S.O Osho",
    role: "Assistant Pastor",
    img: "./photo6.jpg",
  },
  {
    id: 5,
    name: "Pastor (Mrs) R.O Osho",
    role: "Lead Pastor's Wife",
    img: "./photo6.jpg",
  },
  { id: 6, name: "Elder K.A Popoola", role: "Elder", img: "./photo6.jpg" },
  { id: 7, name: "Elder M.S Odupitan", role: "Elder", img: "./photo6.jpg" },
  { id: 8, name: "Elder M.O Shobanjo", role: "Elder", img: "./photo6.jpg" },
];

const gallery = [
  "./photo1.jpg",
  "./photo2.jpg",
  "./photo9.jpg",
  "./photo5.jpg",
  "./photo6.jpg",
  "./photo7.jpg",
  "./photo8.jpg",
  "./photo10.jpg",
];

const reveal = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section className="about-us">
      <motion.section
        className="about-church"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h2>About UPLAM</h2>

        <div className="about-layout">
          <motion.div
            className="about-text"
            variants={reveal}
            transition={{ duration: 0.8, delay: 0.1 }}
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
            variants={reveal}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="./photo11.jpg" alt="Church community" />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="church-leaders"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <h2>Meet Our Leaders</h2>

        <div className="leaders-grid">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              className="leader-card"
              variants={reveal}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <img src={leader.img} alt={leader.name} />
              <h3>{leader.name}</h3>
              <p>{leader.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="church-gallery"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <h2>Church Moments</h2>

        <div className="gallery-grid">
          {gallery.map((img, index) => (
            <motion.div
              key={index}
              className="gallery-card"
              variants={reveal}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <img src={img} alt={`Church event ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="ministries"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <h2>Our Ministries</h2>

        <div className="ministry-cards">
          <motion.div
            className="ministry-card"
            variants={reveal}
            transition={{ duration: 0.6 }}
          >
            <h3>Youth Fellowship</h3>
            <p>Engaging young people with fun, faith, and community.</p>
          </motion.div>

          <motion.div
            className="ministry-card"
            variants={reveal}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3>Spirit-Led Worship</h3>
            <p>Bringing worship to life through music and praise.</p>
          </motion.div>

          <motion.div
            className="ministry-card"
            variants={reveal}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Community Outreach</h3>
            <p>Serving our neighbors and spreading love in action.</p>
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
};

export default About;
