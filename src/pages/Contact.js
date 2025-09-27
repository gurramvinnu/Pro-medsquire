import React, { useState, useRef } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [toast, setToast] = useState({ show: false, message: "", error: false });
  const toastTimeout = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email } = formData;
    if (name && phone && email) {
      setToast({ show: true, message: "✅ Thank you! Your details have been submitted successfully.", error: false });
      setFormData({ name: "", phone: "", email: "", message: "" });
    } else {
      setToast({ show: true, message: "⚠️ Please fill in all required fields.", error: true });
    }
    clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setToast({ ...toast, show: false }), 3000);
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+919912382221";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@medsquiretech.com?subject=Inquiry&body=Hello MedsquireTech,";
  };

  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/oNdpDJ6dSjCzbmzVA", "_blank");
  };

  return (
    <div className="container">
      <section className="contact">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">Get in touch with us for more information</p>
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send us a Message</h3>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item" onClick={handlePhoneClick} style={{ cursor: "pointer" }}>
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 99123 82221</p>
                </div>
              </div>
              <div className="contact-item" onClick={handleEmailClick} style={{ cursor: "pointer" }}>
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@medsquiretech.com</p>
                </div>
              </div>
              <div className="contact-item" onClick={handleLocationClick} style={{ cursor: "pointer", flexDirection: "column", alignItems: "flex-start" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>VedAm Mahal, Kathepu Street, Eluru, AP 534001</p>
                  </div>
                </div>
                <div
                  className="map-container"
                  style={{
                    marginTop: 10,
                    borderRadius: 8,
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    height: 120,
                    width: "100%",
                    maxWidth: 300,
                  }}
                  onClick={e => e.stopPropagation()} // Prevents map click from triggering location click
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.234376008634!2d81.1064963!3d16.7018102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a361500435f262d%3A0xd6ee3a546bb2baa5!2sMedsquire%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1695040000000!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Medsquire Technologies Pvt Ltd Location"
                    style={{ width: "100%", height: "100%", border: "none" }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={`toast${toast.show ? " show" : ""}${toast.error ? " error" : ""}`} id="toast">
        {toast.message}
      </div>
    </div>
  );
}

export default Contact;
