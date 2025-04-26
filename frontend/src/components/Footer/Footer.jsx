import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  const footerRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const currentFooter = footerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollTop(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (currentFooter) {
      observer.observe(currentFooter);
    }

    return () => {
      if (currentFooter) {
        observer.unobserve(currentFooter);
      }
    };
  }, []);


  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-container">

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://www.facebook.com/U2Derode/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
            <li><a href="https://www.instagram.com/up2dateclothing_erode/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
          </ul>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="scroll-to-top" onClick={scrollToTop} title="Back to top">
          <FaArrowUp />
        </div>
      )}
    </footer>
  );
};

export default Footer;
