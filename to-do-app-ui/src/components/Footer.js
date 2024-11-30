import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-company">
          &copy; 2024 Wiktor Krzyczkowski All rights reserved.
        </p>
        <p className="footer-links">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
        <p className="footer-contact">
          Contact us: <a href="mailto:email@example.com">email@example.com</a> |
          (+48) 123 456 789
        </p>
        <div className="footer-social">
          <a href="#">Facebook</a> | <a href="#">Twitter</a> |{" "}
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
