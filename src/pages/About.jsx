import React from "react";
import "./About.css";

const leaders = [
  { id: 1, name: "Pastor John Doe", role: "Senior Pastor", img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" },
  { id: 2, name: "Jane Smith", role: "Youth Leader", img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" },
  { id: 3, name: "Mark Johnson", role: "Choir Director", img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" },
];

const gallery = [
  "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
  "https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg",
  "https://images.pexels.com/photos/2959193/pexels-photo-2959193.jpeg",
  "https://images.pexels.com/photos/1660993/pexels-photo-1660993.jpeg",
];

const About = () => {
  return (
    <section className="about-us">
      {/* About Church */}
      <div className="about-church">
        <h2>About Our Church</h2>
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
            <h3>Choir & Music</h3>
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
