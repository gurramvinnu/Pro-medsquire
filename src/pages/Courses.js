import React from 'react';
import './Courses.css';

function Courses() {
  return (
    <>
      <section className="courses-hero">
        <div className="container">
          <h2>Our Courses</h2>
          <p>Comprehensive training programs designed to make you job-ready</p>
        </div>
      </section>
      <main className="container">
        <div className="section-title">
          <h2>Full Stack Developer Program</h2>
          <p>A complete program covering all aspects of modern web development</p>
        </div>
        <div className="courses-container">
          <div className="course-card">
            <div className="course-header">
              <h3>UI/UX Design</h3>
            </div>
            <div className="course-body">
              <div className="course-topic">
                <h4><i className="fas fa-paint-brush"></i> Design Fundamentals</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Responsive Design Principles</li>
                  <li>UI/UX Best Practices</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="course-card">
            <div className="course-header">
              <h3>Frontend Development</h3>
            </div>
            <div className="course-body">
              <div className="course-topic">
                <h4><i className="fas fa-code"></i> Frontend Technologies</h4>
                <ul>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React.js</li>
                  <li>Angular</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="course-card">
            <div className="course-header">
              <h3>Backend Development</h3>
            </div>
            <div className="course-body">
              <div className="course-topic">
                <h4><i className="fas fa-server"></i> Server Technologies</h4>
                <ul>
                  <li>Node.js & Express</li>
                  <li>.NET Core</li>
                  <li>RESTful API Design</li>
                  <li>Dot net API</li>
                  <li>Authentication & Authorization</li>
                  <li>Server Deployment</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="course-card">
            <div className="course-header">
              <h3>Database Management</h3>
            </div>
            <div className="course-body">
              <div className="course-topic">
                <h4><i className="fas fa-database"></i> Database Technologies</h4>
                <ul>
                  <li>SQL Fundamentals</li>
                  <li>MySQL & PostgreSQL</li>
                  <li>MongoDB (NoSQL)</li>
                  <li>Database Design & Normalization</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="course-card">
            <div className="course-header">
              <h3>DevOps & Cloud</h3>
            </div>
            <div className="course-body">
              <div className="course-topic">
                <h4><i className="fas fa-cloud"></i> Deployment & DevOps</h4>
                <ul>
                  <li>Git & GitHub</li>
                  <li>CI/CD Pipelines</li>
                  <li>Docker Containers</li>
                  <li>Azure Cloud Services</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="course-card">
            <div className="course-header">
              <h3>Additional Technologies</h3>
            </div>
            <div className="course-body">
              <div className="course-topic">
                <h4><i className="fas fa-tools"></i> Supplementary Skills</h4>
                <ul>
                  <li>Prompt Engineering</li>
                  <li>Agile Methodology</li>
                  <li>Testing Website</li>
                  <li>Web Security Principles</li>
                  <li>Performance Optimization</li>
                  <li>Progressive Web Apps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Courses;
