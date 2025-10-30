import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Floating Background Elements */}
      <div className="about-floating-elements">
        <div className="about-floating-element about-element-1">🚀</div>
        <div className="about-floating-element about-element-2">💻</div>
        <div className="about-floating-element about-element-3">⭐</div>
        <div className="about-floating-element about-element-4">🔥</div>
        <div className="about-floating-element about-element-5">👨‍💻</div>
        <div className="about-floating-element about-element-6">🎯</div>
      </div>

      <section className="about-hero">
        <div className="container">
          <h1 className="about-main-title">About MedSquire Technologies</h1>
          <p className="about-hero-subtitle">
            Building Professional Careers Through Corporate-Style Training & Real-World Experience
          </p>
        </div>
      </section>

      <section className="about-main container">
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3 className="about-section-title">
                <i className="fas fa-rocket"></i>
                Our Mission & Vision
              </h3>
              <p>
                MedSquire Technologies Pvt Ltd is a rapidly growing software company and training center based in Eluru,
                Andhra Pradesh. We're not just building applications – we're building professional careers.
              </p>
              <p>
                Our mission is to bridge the gap between academic knowledge and industry requirements by providing
                corporate-style training that mimics real-world working environments. We believe in learning by doing,
                which is why our programs are heavily focused on hands-on experience with live projects.
              </p>
            </div>

            <div className="about-card">
              <h3 className="about-section-title">
                <i className="fas fa-clock"></i>
                Unique Training Methodology
              </h3>
              <p>
                What sets us apart is our unique training methodology. With a 5-day week format ( 10:00 AM
                - 7:00 PM), we replicate actual corporate working hours and environment. This approach ensures our students
                are not just technically proficient but also professionally prepared for the IT industry.
              </p>
            </div>

            <div className="about-card">
              <h3 className="about-section-title">
                <i className="fas fa-code"></i>
                Comprehensive Curriculum
              </h3>
              <p>
                Our curriculum covers the entire stack of modern web development – from UI/UX design principles to frontend
                frameworks, backend development, databases, and cloud technologies. We also emphasize DevOps practices and
                prompt engineering to keep our students ahead of the curve.
              </p>
            </div>
          </div>

          <div className="about-stats-section">
            <div className="stats-container">
              <h3 className="stats-title">Our Impact in Numbers</h3>
              <div className="about-stats">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number" data-count="15">15+</div>
                    <p className="stat-label">Years Experience</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number" data-count="200">100+</div>
                    <p className="stat-label">Students Trained</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number" data-count="95">95%</div>
                    <p className="stat-label">Placement Rate</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className="fas fa-project-diagram"></i>
                  </div>
                  <div className="stat-content">
                    <div className="stat-number" data-count="50">25+</div>
                    <p className="stat-label">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="values-container">
              <h3 className="values-title">Our Core Values</h3>
              <div className="values-grid">
                <div className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h4>Professionalism</h4>
                  <p>Corporate-style training environment</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h4>Innovation</h4>
                  <p>Cutting-edge technologies & methodologies</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h4>Excellence</h4>
                  <p>Quality education with proven results</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">
                    <i className="fas fa-heart"></i>
                  </div>
                  <h4>Support</h4>
                  <p>Lifetime career guidance & mentorship</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h2 className="section-title">Our Training Philosophy</h2>
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <div className="philosophy-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h4>Hands-on Learning</h4>
              <p>Learn by doing with real-world projects and live coding sessions</p>
            </div>
            <div className="philosophy-card">
              <div className="philosophy-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h4>Industry Ready</h4>
              <p>Corporate work hours and environment preparation</p>
            </div>
            <div className="philosophy-card">
              <div className="philosophy-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h4>Fast-track Growth</h4>
              <p>Intensive 4-day week format for rapid skill development</p>
            </div>
            <div className="philosophy-card">
              <div className="philosophy-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4>Mentorship</h4>
              <p>1:1 guidance from experienced industry professionals</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="about-cta">
          <h3>Ready to Start Your Tech Career?</h3>
          <p>Join MedSquire Technologies and transform your passion into a profession</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">
              Get Started Today
            </a>
            <a href="/courses" className="btn btn-secondary">
              Explore Courses
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;