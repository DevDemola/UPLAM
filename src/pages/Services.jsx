import React from "react";
import "./Services.css";
// import kidsImg from "../../assets/kids-church.jpg";
// import teensImg from "../../assets/teen-church.jpg";

const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h2>Our Service Experience</h2>
        <p>
          We have robust worship environments specially fitted for adults,
          youths, and children. Come and experience soul-lifting worship,
          life-transforming word, and prevailing prayers in a family of love.
        </p>
      </div>

      <div className="services-grid">
        {/* Kids Church */}
        <div className="service-card">
          <div
            className="service-image"
            style={{ backgroundImage: `url("./photo12.jpg")` }}
          >
            <div className="overlay">
              <h3>SEEDS (Kids Church)</h3>
            </div>
          </div>
          <p>
            Join Seeds, a fun and engaging space for kids 0–7. Play, learn, and
            grow closer to God while discovering unique gifts.
          </p>
          <button className="learn-btn">Learn More →</button>
        </div>

        {/* Teen Church */}
        <div className="service-card">
          <div
            className="service-image"
            style={{ backgroundImage: `url("./photo3.jpg")` }}
          >
            <div className="overlay">
              <h3>GOOD WOMEN</h3>
            </div>
          </div>
          <p>
            Join us for high-energy worship, real-life topics, and epic events.
            Discover your purpose, grow your faith, and join the movement!
          </p>
          <button className="learn-btn">Learn More →</button>
        </div>
        <div className="service-card">
          <div
            className="service-image"
            style={{ backgroundImage: `url("./photo3.jpg")` }}
          >
            <div className="overlay">
              <h3>GOOD MEN</h3>
            </div>
          </div>
          <p>
            Join us for high-energy worship, real-life topics, and epic events.
            Discover your purpose, grow your faith, and join the movement!
          </p>
          <button className="learn-btn">Learn More →</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
