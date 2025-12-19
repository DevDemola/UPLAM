import React from "react";
import "./About.css";

const leaders = [
  { id: 1, name: " Late Prophet S.S Osho (JP)", role: "Founder/G.O", img: "./photo6.jpg" },
  { id: 2, name: "Lady Evang F.T Osho (JP)", role: "Mummy G.O", img: "./photo6.jpg" },
  { id: 3, name: "Pastor I.O Osho", role: " Active Lead Pastor", img: "./photo6.jpg" },
  { id: 3, name: "Asst Pastor S.O Osho", role: "Assistant Pastor", img: "./photo6.jpg" },
  { id: 3, name: "Pastor (Mrs) R.O Osho", role: "Lead Pastor's Wife", img: "./photo6.jpg" },
  { id: 3, name: "Elder K.A Popoola", role: "Elder", img: "./photo6.jpg" },
  { id: 3, name: "Elder M.S Odupitan", role: "Elder", img: "./photo6.jpg" },
  { id: 3, name: "Elder M.O Shobanjo", role: "Elder", img: "./photo6.jpg" },
];

const gallery = [
  "./photo1.jpg",
  "./photo2.jpg",
  // "./photo3.jpg",
  "./photo9.jpg",
  "./photo5.jpg",
  "./photo6.jpg",
  "./photo7.jpg",
  "./photo8.jpg",
  "./photo10.jpg",
];

const About = () => {
  return (
    <section className="about-us">
      {/* About Church */}
    <section className="about-church">
  <h2>About UPLAM</h2>

  <div className="about-layout">
    {/* Left: Text */}
    <div className="about-text">
      <p>
        We are a Christ-centered church committed to teaching God’s Word, fostering a welcoming community, and empowering members to live out their faith daily. Our mission is to glorify God, nurture believers, and serve our community with love.
      </p>
    </div>

    {/* Right: Image */}
    <div className="about-image">
      <img src="./photo11.jpg" alt="Church community" />
    </div>
  </div>
</section>


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
