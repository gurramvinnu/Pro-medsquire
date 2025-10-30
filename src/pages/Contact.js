import React, { useState, useRef } from "react";
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [toast, setToast] = useState({ show: false, message: "", error: false });
  const [isLoading, setIsLoading] = useState(false);
  const toastTimeout = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    clearTimeout(toastTimeout.current);

    try {
      const { name, phone, email, message } = formData;

      // Basic validation
      if (!name || !phone || !email) {
        setToast({ show: true, message: "⚠️ Please fill in all required fields.", error: true });
        setIsLoading(false);
        toastTimeout.current = setTimeout(() => setToast(t => ({ ...t, show: false })), 5000);
        return;
      }

      const response = await fetch('https://backend-medsquire-1.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, message })
      });

      if (!response.ok) {
        // Try to read error message from body
        let errBody = {};
        try { errBody = await response.json(); } catch (e) {}
        throw new Error(errBody.error || errBody.message || response.statusText || 'Server error');
      }

      const resData = await response.json();
      setToast({ show: true, message: resData.message || "🎉 Thank you! Your details have been submitted successfully.", error: false });
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error('Contact submit error:', err);
      setToast({ show: true, message: "❌ Failed to send message. Please try again later.", error: true });
    } finally {
      setIsLoading(false);
      clearTimeout(toastTimeout.current);
      toastTimeout.current = setTimeout(() => setToast(t => ({ ...t, show: false })), 5000);
    }
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+919014312221";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@medsquiretech.com?subject=Inquiry&body=Hello MedsquireTech,";
  };

  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/oNdpDJ6dSjCzbmzVA", "_blank");
  };

  const FloatingElements = () => (
    <div className="contact-floating-elements">
      <div className="contact-floating-element contact-element-1">📧</div>
      <div className="contact-floating-element contact-element-2">📱</div>
      <div className="contact-floating-element contact-element-3">📍</div>
      <div className="contact-floating-element contact-element-4">💬</div>
    </div>
  );

  return (
    <div className="contact-page">
      <FloatingElements />
      <div className="container">
        <section className="contact">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          
          <div className="contact-container">
            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send us a Message</h3>
              
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows="5"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn ${isLoading ? 'btn-loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Contact Information */}
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-details">
                
                <div className="contact-item" onClick={handlePhoneClick}>
                  <div className="contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 90143 12221</p>
                    <small>Tap to call directly</small>
                  </div>
                </div>
                
                <div className="contact-item" onClick={handleEmailClick}>
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>info@medsquiretech.com</p>
                    <small>Tap to send email</small>
                  </div>
                </div>
                
                <div className="contact-item" onClick={handleLocationClick}>
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>VedAm Mahal, Kathepu Street, Eluru, AP 534001</p>
                    <small>Tap to view on map</small>
                    
                    <div className="map-container">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.234376008634!2d81.1064963!3d16.7018102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a361500435f262d%3A0xd6ee3a546bb2baa5!2sMedsquire%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1695040000000!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Medsquire Technologies Pvt Ltd Location"
                        style={{ width: "100%", height: "120px", border: "none" }}
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="social-icons">
                  <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Toast Notification */}
        <div className={`toast${toast.show ? " show" : ""}${toast.error ? " error" : ""}`}>
          {toast.message}
        </div>
      </div>
    </div>
  );
}

export default Contact;