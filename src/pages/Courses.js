import React from 'react';
import './Courses.css';

function Courses() {
  const FloatingElements = () => (
    <div className="courses-floating-elements">
      <div className="courses-floating-element courses-element-1">💻</div>
      <div className="courses-floating-element courses-element-2">🚀</div>
      <div className="courses-floating-element courses-element-3">⭐</div>
      <div className="courses-floating-element courses-element-4">🔥</div>
      <div className="courses-floating-element courses-element-5">🎯</div>
      <div className="courses-floating-element courses-element-6">⚡</div>
    </div>
  );

  return (
    <div className="courses-page">
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="container">
          <h2>Master Modern Development</h2>
          <p>Industry-relevant courses designed to transform you into a job-ready full stack developer</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="courses-main container">
        <div className="section-title">
          <h2>Full Stack Developer Program</h2>
          <p>A comprehensive program covering cutting-edge technologies and real-world project experience</p>
        </div>

        {/* Program Overview */}
        <div className="program-overview">
          <h3>Why Choose Our Program?</h3>
          <div className="overview-grid">
            <div className="overview-item">
              <div className="overview-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h4>Hands-on Learning</h4>
              <p>Practical projects and real-world scenarios</p>
            </div>
            <div className="overview-item">
              <div className="overview-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h4>Expert Instructors</h4>
              <p>Learn from industry professionals</p>
            </div>
            <div className="overview-item">
              <div className="overview-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h4>Placement Support</h4>
              <p>100% placement assistance</p>
            </div>
            <div className="overview-item">
              <div className="overview-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h4>Certification</h4>
              <p>Industry-recognized certification</p>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="courses-container">
          {/* UI/UX Design Card */}
          <div className="course-card">
            <div className="course-header">
              <h3>UI/UX Design</h3>
            </div>
            <div className="course-body">
              <div className="course-topic">
                <h4><i className="fas fa-paint-brush"></i> Design Fundamentals</h4>
                <ul>
                  <li>HTML5 & Semantic Markup</li>
                  <li>CSS3 & Advanced Styling</li>
                  <li>Responsive Design Principles</li>
                  <li>UI/UX Best Practices</li>
                  <li>Figma & Design Tools</li>
                  <li>Prototyping & Wireframing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Frontend Development Card */}
          <div className="course-card">
            <div className="course-header">
              <h3>Frontend Development</h3>
            </div>
            <div className="course-body">
              <div className="course-topic">
                <h4><i className="fas fa-code"></i> Frontend Technologies</h4>
                <ul>
                  <li>JavaScript ES6+</li>
                  <li>TypeScript</li>
                  <li>React.js with Hooks</li>
                  <li>Angular Framework</li>
                  <li>State Management</li>
                  <li>Component Architecture</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Backend Development Card */}
          <div className="course-card">
            <div className="course-header">
              <h3>Backend Development</h3>
            </div>
            <div className="course-body">
              <div className="course-topic">
                <h4><i className="fas fa-server"></i> Server Technologies</h4>
                <ul>
                  <li>Node.js & Express.js</li>
                  <li>.NET Core & C#</li>
                  <li>RESTful API Design</li>
                  <li>Dot Net API Development</li>
                  <li>Authentication & Authorization</li>
                  <li>Server Deployment & Scaling</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Database Management Card */}
          <div className="course-card">
            <div className="course-header">
              <h3>Database Management</h3>
            </div>
            <div className="course-body">
              <div className="course-topic">
                <h4><i className="fas fa-database"></i> Database Technologies</h4>
                <ul>
                  <li>SQL Fundamentals & Queries</li>
                  <li>MySQL & PostgreSQL</li>
                  <li>MongoDB (NoSQL)</li>
                  <li>Database Design & Normalization</li>
                  <li>ORM & Data Modeling</li>
                  <li>Database Optimization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* DevOps & Cloud Card */}
          <div className="course-card">
            <div className="course-header">
              <h3>DevOps & Cloud</h3>
            </div>
            <div className="course-body">
              <div className="course-topic">
                <h4><i className="fas fa-cloud"></i> Deployment & DevOps</h4>
                <ul>
                  <li>Git & GitHub Workflows</li>
                  <li>CI/CD Pipelines</li>
                  <li>Docker Containers</li>
                  <li>Azure Cloud Services</li>
                  <li>AWS Fundamentals</li>
                  <li>Infrastructure as Code</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Technologies Card */}
          <div className="course-card">
            <div className="course-header">
              <h3>Additional Technologies</h3>
            </div>
            <div className="course-body">
              <div className="course-topic">
                <h4><i className="fas fa-tools"></i> Supplementary Skills</h4>
                <ul>
                  <li>Prompt Engineering & AI Tools</li>
                  <li>Agile & Scrum Methodology</li>
                  <li>Website Testing & QA</li>
                  <li>Web Security Principles</li>
                  <li>Performance Optimization</li>
                  <li>Progressive Web Apps (PWA)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="courses-cta">
          <h3>Ready to Start Your Journey?</h3>
          <p>Join our Full Stack Developer program and transform your career in just 6 months</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn-primary">
              Enroll Now - Limited Seats!
            </a>
            {/* <a href="/curriculum" className="btn-secondary">
              Download Curriculum
            </a> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Courses;