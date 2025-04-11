import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./CSS/Contact.css";

const Contacts = () => {
  return (
    <section className="contact-container">
      <div className="contact-card">
        <FaPhone className="contact-icon" />
        <h3>Call Us</h3>
        <p>0424 222 2922</p>
      </div>
      <div className="contact-card">
        <FaEnvelope className="contact-icon" />
        <h3>Email Us</h3>
        <p>up2date@gmail.com</p>
      </div>
      <div className="contact-card">
        <FaMapMarkerAlt className="contact-icon" />
        <h3>Visit Us</h3>
        <p>Mettur Rd, Erode Fort, Erode,</p>
      </div>
    </section>
  );
};

export default Contacts;
