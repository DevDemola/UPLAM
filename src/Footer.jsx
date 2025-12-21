import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaFacebookF,
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-section">
          <img src="./Logo.png" className="logos" />
          <p>
            A Christ-centered community committed to worship, faith, and love.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>10/12 Uplight Street,Bayeku,Ikorodu Lagos, Nigeria</p>
          <p>Email: info@Uplam.com</p>
          <p>Phone: +234 800 123 4567</p>
          <span style={{ fontSize: "20px", cursor: "pointer" }}>
            <FaFacebook />
          </span>
          {"    "}
          <span style={{ fontSize: "20px", cursor: "pointer" }}>
            <FaInstagram />
          </span>
          {"   "}
          <span style={{ fontSize: "20px", cursor: "pointer" }}>
            <FaYoutube />
          </span>
          {"   "}
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Uplight Apostolic Ministry. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
