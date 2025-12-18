import React from "react";
import "./Footer.css";

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
          <p>123 Church Street, City, Country</p>
          <p>Email: info@mychurch.com</p>
          <p>Phone: +234 800 123 4567</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} My Church. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
