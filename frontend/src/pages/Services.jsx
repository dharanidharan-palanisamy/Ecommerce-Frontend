import React from "react";
import { FaShippingFast, FaShieldAlt, FaHeadset, FaUndo } from "react-icons/fa";
import './CSS/Services.css';
const services = [
  {
    icon: <FaShippingFast />,
    title: "Fast Delivery",
    description: "Get your orders delivered within 24-48 hours with our express shipping.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Payment",
    description: "We ensure secure payment through encrypted gateways and trusted banks.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Customer Support",
    description: "Need help? Our customer support team is available 24/7 to assist you.",
  },
  {
    icon: <FaUndo />,
    title: "Easy Returns",
    description: "Hassle-free returns within 7 days of purchase. No questions asked!",
  },
];

const Services = () => {
  return (
    <section className="services-container">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;
