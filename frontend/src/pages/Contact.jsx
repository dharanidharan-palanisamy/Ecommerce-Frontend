import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCommentDots,FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./CSS/Contact.css";

const Contacts = () => {
  const navigate = useNavigate();

  const handleFeedbackClick = () => {
    navigate("/feedback"); // Navigate to Feedback page
  };

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

      <div className="contact-card" onClick={handleFeedbackClick}>
        <FaCommentDots className="contact-icon" />
        <h3>Feedback</h3>
        <p>We'd love to hear your thoughts! Please share your feedback with us anytime.</p>
      </div>
      <div className="contact-card">
      <FaClock className="contact-icon" />
        <h3>Working Hours 🕒</h3>
        <p>Monday - Sunday: 9:00 AM - 10:00 PM</p>
      </div>
    </section>
  );
};

export default Contacts;
