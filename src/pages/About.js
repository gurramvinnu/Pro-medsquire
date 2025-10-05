import React from 'react';
import './About.css';


function About() {
  return (
    <>
      <section className="about container">
        <h2 className="section-title">About MedSquire Technologies</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Building Professional Careers</h3>
            <p>
              MedSquire Technologies Pvt Ltd is a rapidly growing software company and training center based in Eluru,
              Andhra Pradesh. We're not just building applications – we're building professional careers.
            </p>
            <p>
              Our mission is to bridge the gap between academic knowledge and industry requirements by providing
              corporate-style training that mimics real-world working environments. We believe in learning by doing,
              which is why our programs are heavily focused on hands-on experience with live projects.
            </p>
            <p>
              What sets us apart is our unique training methodology. With a 4-day week format (Friday to Monday, 10:00 AM
              - 7:00 PM), we replicate actual corporate working hours and environment. This approach ensures our students
              are not just technically proficient but also professionally prepared for the IT industry.
            </p>
            <p>
              Our curriculum covers the entire stack of modern web development – from UI/UX design principles to frontend
              frameworks, backend development, databases, and cloud technologies. We also emphasize DevOps practices and
              prompt engineering to keep our students ahead of the curve.
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
