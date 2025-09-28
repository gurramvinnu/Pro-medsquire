import React from 'react';

function About() {
  return (
    <>
      <section className="about container">
        <h2 className="section-title">About MedSquire Technologies</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Building Professional Careers</h3>
            <p>
              MedSquire Technologies Pvt Ltd, based in Eluru, Andhra Pradesh, is more than just a fast-growing software
              company and training hub — we are a launchpad for professional careers in the IT industry.
            </p>
            <p>
              Our mission is simple yet powerful: to close the gap between classroom learning and real-world industry
              needs. We achieve this by offering corporate-style training that mirrors the actual working environment
              of leading IT companies.
            </p>
            <p>
              At MedSquire, we believe in <strong>learning by doing</strong>. That’s why our programs focus heavily on
              hands-on experience with <strong>live projects</strong>, ensuring students can apply concepts practically
              rather than just memorizing theory.
            </p>
            <p>
              What makes us different is our unique training methodology. Timing 10:00 AM – 7:00 PM <strong>24 Hours open</strong>
              , we recreate real corporate hours and discipline. This way, our
              students graduate not only with strong technical expertise but also with the confidence and professional
              habits needed to excel in the IT world.
            </p>
            <p>
              Our curriculum covers the <strong>entire stack of modern web development</strong> — from UI/UX design
              principles, frontend frameworks, and backend development, to databases, cloud technologies, and DevOps.
              We also emphasize emerging skills like <strong>AI tools & prompt engineering</strong>, ensuring our
              students stay ahead of the curve.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <p>Students Trained</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <p>Placement Rate</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
