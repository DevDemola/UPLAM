import React from "react";
import "./About.css";

const leaders = [
  { id: 1, name: "Pastor S.S Osho", role: "Founder/G.O", img: "./photo4.jpg" },
  { id: 2, name: "Deaconess F.T Osho", role: "Mummy G.O", img: "./photo4.jpg" },
  { id: 3, name: "Pastor I.O Osho", role: "Lead Pastor", img: "./photo4.jpg" },
];

const gallery = [
  "./photo1.jpg",
  "./photo2.jpg",
  "./photo3.jpg",
  "./photo1.jpg",
  "./photo1.jpg",
  "./photo1.jpg",
  "./photo1.jpg",
  "./photo1.jpg",
];

const About = () => {
  return (
    <section className="about-us">
      {/* About Church */}
      <div className="about-church">
        <h2>About UPLAM</h2>
        <p>
          We are a Christ-centered church committed to teaching God’s Word, fostering a welcoming community, and empowering members to live out their faith daily. Our mission is to glorify God, nurture believers, and serve our community with love.
        </p>
      </div>

      {/* Church Leaders */}
      <div className="church-leaders">
        <h2>Meet Our Leaders</h2>
        <div className="leaders-grid">
          {leaders.map((leader) => (
            <div key={leader.id} className="leader-card">
              <img src={leader.img} alt={leader.name} />
              <h3>{leader.name}</h3>
              <p>{leader.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Church Gallery */}
      <div className="church-gallery">
        <h2>Church Moments</h2>
        <div className="gallery-grid">
          {gallery.map((img, index) => (
            <div key={index} className="gallery-card">
              <img src={img} alt={`Church event ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Ministries */}
      <div className="ministries">
        <h2>Our Ministries</h2>
        <div className="ministry-cards">
          <div className="ministry-card">
            <h3>Youth Fellowship</h3>
            <p>Engaging young people with fun, faith, and community.</p>
          </div>
          <div className="ministry-card">
            <h3>Spirit-Led Worship</h3>
            <p>Bringing worship to life through music and praise.</p>
          </div>
          <div className="ministry-card">
            <h3>Community Outreach</h3>
            <p>Serving our neighbors and spreading love in action.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
