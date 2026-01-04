import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-container">
        {/* LEFT: CONTACT DETAILS */}
        <div className="contact-details">
          <h3 className="contact-subtitle">We’d Love to Hear From You</h3>
          <p className="contact-description">
            Whether you have a question, need prayers, or want to worship with
            us, feel free to reach out.
          </p>

          <div className="contact-info-item">
            <FaPhoneAlt />
            <span>+234 801 234 5678</span>
          </div>

          <div className="contact-info-item">
            <FaEnvelope />
            <span>uplamchurch@gmail.com</span>
          </div>

          <div className="contact-info-item">
            <FaMapMarkerAlt />
            <span>10/12 Uplight Street,Bayeku,Ikorodu Lagos, Nigeria</span>
          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <form
          className="contact-form-card"
          action="https://formspree.io/f/xvzpqyjd"
          method="POST"
        >
          <div className="contact-form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>

          <div className="contact-form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="contact-form-group">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            />
          </div>

          {/* Optional hidden subject */}
          <input
            type="hidden"
            name="_subject"
            value="New message from church website"
          />

          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
