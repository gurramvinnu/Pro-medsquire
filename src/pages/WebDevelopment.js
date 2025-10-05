import React from 'react';
import './WebDevelopment.css';

function WebDevelopment() {
  return (
    <>
      <section className="webdev-hero">
        <div className="container">
          <h2>Premium Web Solutions for Global Businesses</h2>
          <p>
            Cutting-edge web design and development services powered by the latest technologies to elevate your digital
            presence and drive business growth.
          </p>
        </div>
      </section>
      <section className="container">
        <h2 className="section-title">Our Web Development Services</h2>
        <p className="section-subtitle">Comprehensive digital solutions tailored to your business needs</p>
        <div className="services-container">
          <div className="service-card">
            <div className="service-content">
              <h3>Custom Web Development</h3>
              <p>
                We create tailored website designs that reflect your brand's unique identity, ensuring a visually
                stunning and highly engaging online presence.
              </p>
              <ul className="service-features">
                <li>Responsive Design</li>
                <li>SEO-Friendly Structure</li>
                <li>Cross-Browser Compatibility</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
          </div>
          <div className="service-card">
            <div className="service-content">
              <h3>E-Commerce Solutions</h3>
              <p>
                We specialize in creating high-converting e-commerce websites that provide seamless shopping experiences
                from product pages to checkout processes.
              </p>
              <ul className="service-features">
                <li>Shopping Cart Integration</li>
                <li>Payment Gateway Setup</li>
                <li>Inventory Management</li>
                <li>Order Processing System</li>
              </ul>
            </div>
          </div>
          <div className="service-card">
            <div className="service-content">
              <h3>.Net website Development</h3>
              <p>
                Manage your website with ease using our custom solutions. We build intuitive, flexible platforms tailored
                to your specific content management needs.
              </p>
              <ul className="service-features">
                <li>WordPress Development</li>
                <li>Custom .Net Solutions</li>
                <li>Content Management Tools</li>
                <li>User Permission Systems</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="process">
          <h2 className="section-title">Our Development Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>We begin by thoroughly understanding your business goals, target audience, and project requirements.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>We create a detailed project plan with timelines, milestones, and deliverables to ensure transparency.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Design</h3>
              <p>
                Our designers create wireframes and mockups that align with your brand identity and user experience
                goals.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Development</h3>
              <p>Our developers bring the designs to life using the latest technologies and best practices.</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Testing</h3>
              <p>We conduct rigorous testing to ensure functionality, performance, and compatibility across devices.</p>
            </div>
            <div className="process-step">
              <div className="step-number">6</div>
              <h3>Launch</h3>
              <p>We deploy your website and provide training and documentation for ongoing management.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebDevelopment;
