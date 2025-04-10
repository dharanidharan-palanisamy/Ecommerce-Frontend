import React from "react";
import "./CSS/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-banner">
        <h1>About Us</h1>
        <p>Discover our journey and commitment to quality.</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            We are a passionate team dedicated to bringing you the best shopping experience. 
            Our platform offers a wide range of high-quality products at affordable prices.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to revolutionize online shopping by providing top-tier products, 
            exceptional customer service, and a seamless user experience.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✅ High-quality & affordable products</li>
            <li>✅ Secure and fast checkout</li>
            <li>✅ Excellent customer support</li>
            <li>✅ Hassle-free returns and exchanges</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
