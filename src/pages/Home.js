import React from 'react';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <h2>Code. Create. Conquer.</h2>
          <p>
            Emerge as a Fullstack Developer who can compete with industry experts. Gain hands-on experience, tackle
            real-world projects and master Corporate Level Skills.
          </p>
          <a href="/contact" className="btn">Enroll Now</a>
        </div>
      </section>
      <main className="container">
        <div className="company-info">
          <div className="company-image">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&h=400&q=80"
              alt="MedSquire Technologies"
            />
          </div>
          <div className="company-text">
            <h2>Welcome to MedSquire Technologies</h2>
            <p>
              MedSquire Technologies is a premier software development company and training center dedicated to
              empowering the next generation of developers. We specialize in providing corporate-style training that
              bridges the gap between academic knowledge and industry requirements.
            </p>
            <p>
              Our unique approach combines real-world project experience with comprehensive curriculum coverage,
              ensuring our students are job-ready upon completion of our programs.
            </p>
            <a href="/courses" className="btn">Explore Our Courses</a>
          </div>
        </div>
        <div className="section-title">
          <h2>Why Choose Our Program</h2>
        </div>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3>Corporate-Style Training</h3>
            <p>Experience real office culture with task-based learning in a professional environment.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Live Projects</h3>
            <p>Get hands-on experience with real-world projects that enhance your portfolio.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Expert Mentors</h3>
            <p>Learn from industry experts with years of experience in software development.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Career Support</h3>
            <p>Receive resume building assistance and interview preparation to jumpstart your career.</p>
          </div>
        </div>
        <section className="trainer-section">
          <div className="container">
            <div className="section-title">
              <h2>Meet Our Lead Trainer</h2>
            </div>
            <div className="trainer-card">
              <div className="trainer-image">
                <img alt="Trainer Jacob" />
              </div>
              <div className="trainer-info">
                <h3>Jacob</h3>
                <div className="trainer-exp">
                  <h4>15+ Years of Industry Experience</h4>
                  <p>
                    Jacob brings over a decade and a half of extensive experience in software development and training.
                    His expertise spans across multiple domains and technologies, making him an invaluable mentor for
                    aspiring developers.
                  </p>
                </div>
                <div>
                  <h4>Previous Companies</h4>
                  <div className="companies">
                    <span className="company-badge">Tekreant</span>
                    <span className="company-badge">Value Lab</span>
                    <span className="company-badge">Warrous</span>
                    <span className="company-badge">Concentrix</span>
                    <span className="company-badge">Icool</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;