import React from 'react';
import logo from '../assets/company_logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="MedSquire Technologies Logo" />
            <span>MedSquire Technologies</span>
          </div>
          <p className="footer-tagline">
            Building professional careers in software development through corporate-style training.
          </p>
        </div>
        
        <div className="footer-contact">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>+91 90143 12221</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>info@medsquiretech.com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>VedAm Mahal, Kathepu Street, Eluru</span>
          </div>
        </div>

        <div className="footer-social">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 MedSquire Technologies Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;