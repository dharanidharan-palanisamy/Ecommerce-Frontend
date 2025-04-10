import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./CSS/Contact.css";

const Contacts = () => {
  return (
    <section className="contact-container">
      <div className="contact-card">
        <FaPhone className="contact-icon" />
        <h3>Call Us</h3>
        <p>+123 456 7890</p>
      </div>
      <div className="contact-card">
        <FaEnvelope className="contact-icon" />
        <h3>Email Us</h3>
        <p>support@example.com</p>
      </div>
      <div className="contact-card">
        <FaMapMarkerAlt className="contact-icon" />
        <h3>Visit Us</h3>
        <p>123 Street, City, Country</p>
      </div>
    </section>
  );
};

export default Contacts;
