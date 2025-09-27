import React from 'react';
import logo from '../assets/company_logo.jpeg';

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-logo">
          <h2>
            <img src={logo} alt="MedSquire Technologies Logo" style={{ width: '50px' }} />
            MedSquire Technologies
          </h2>
          <p>
            Code. Create. Conquer. We're dedicated to building professional careers in software development through
            corporate-style training and real-world project experience.
          </p>
        </div>
        <div className="footer-connect">
          <h3>Stay Connected With Us</h3>
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
          <div className="contact-item">
            <div className="contact-icon"><i className="fas fa-phone"></i></div>
            <div><p>+91 99123 82221</p></div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><i className="fas fa-envelope"></i></div>
            <div><p>info@medsquiretech.com</p></div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
            <div><p>VedAm Mahal, Kathepu Street, Eluru, AP 534001</p></div>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; 2023 MedSquire Technologies Pvt Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;