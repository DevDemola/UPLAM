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
            Our Children’s Department is a safe, joyful, and nurturing
            environment where children are introduced to God’s love at an early
            age. Through fun activities, Bible stories, music, and guided
            learning, children are helped to grow in faith, build godly values,
            and develop confidence in who they are in Christ.
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
            GOOD WOMEN is a vibrant fellowship where women are encouraged,
            strengthened, and inspired. Through worship, teaching, and heartfelt
            conversations, women grow spiritually, build lasting relationships,
            and are empowered to live purpose-filled lives rooted in faith.
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
            GOOD MEN is a space for men to grow in faith, character, and
            leadership. Through honest conversations, biblical teaching, and
            brotherhood, men are equipped to stand strong in their walk with God
            and make a positive impact in their families and communities.
          </p>
          <button className="learn-btn">Learn More →</button>
        </div>
        <div className="service-card">
          <div
            className="service-image"
            style={{ backgroundImage: `url("./photo3.jpg")` }}
          >
            <div className="overlay">
              <h3>UPLAM YOUTH</h3>
            </div>
          </div>
          <p>
            Our Youth Fellowship is a vibrant space where young people connect,
            grow, and discover their God-given purpose. Through dynamic worship,
            real-life conversations, and meaningful fellowship, youths are
            empowered to build strong faith, develop leadership, and live boldly
            for Christ in today’s world.
          </p>
          <button className="learn-btn">Learn More →</button>
        </div>
        <div className="service-card">
          <div
            className="service-image"
            style={{ backgroundImage: `url("./photo3.jpg")` }}
          >
            <div className="overlay">
              <h3>MIRACLE VOICES</h3>
            </div>
          </div>
          <p>
            The Choristers ministry is dedicated to leading the congregation
            into God’s presence through spirit-filled worship. With excellence,
            unity, and passion, the choir ministers through music that uplifts
            hearts, deepens faith, and creates an atmosphere where lives are
            touched by God’s power.
          </p>
          <button className="learn-btn">Learn More →</button>
        </div>
        <div className="service-card">
          <div
            className="service-image"
            style={{ backgroundImage: `url("./photo3.jpg")` }}
          >
            <div className="overlay">
              <h3>MEDIA TEAM</h3>
            </div>
          </div>
          <p>
            The Media Team serves behind the scenes to communicate the message
            of the Gospel with clarity and creativity. From sound and visuals to
            livestream and content production, this team uses skill and
            innovation to support worship, enhance services, and reach lives
            beyond the church walls.
          </p>
          <button className="learn-btn">Learn More →</button>
        </div>
        <div className="service-card">
          <div
            className="service-image"
            style={{ backgroundImage: `url("./photo3.jpg")` }}
          >
            <div className="overlay">
              <h3>MOVING TRAIN</h3>
            </div>
          </div>
          <p>
            Moving Train is a passionate youth prayer movement committed to
            raising young people who are strong in faith and grounded in prayer.
            Through fervent intercession, worship, and spiritual teaching,
            youths are empowered to seek God wholeheartedly, grow deeper in
            their walk with Him, and stand firm in their generation.
          </p>
          <button className="learn-btn">Learn More →</button>
        </div>
        <div className="service-card">
          <div
            className="service-image"
            style={{ backgroundImage: `url("./photo3.jpg")` }}
          >
            <div className="overlay">
              <h3>USHERING DEPARTMENT</h3>
            </div>
          </div>
          <p>
            Our Ushers and Hospitality Team are the first expression of warmth
            and love to everyone who walks through our doors. With kindness,
            order, and excellence, they create a welcoming environment that
            helps worshippers feel comfortable, valued, and ready to encounter
            God.
          </p>
          <button className="learn-btn">Learn More →</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
