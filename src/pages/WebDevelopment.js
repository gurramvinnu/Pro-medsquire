import React from 'react';
import './WebDevelopment.css';

function WebDevelopment() {
  const FloatingElements = () => (
    <div className="webdev-floating-elements">
      <div className="webdev-floating-element webdev-element-1">⚛️</div>
      <div className="webdev-floating-element webdev-element-2">🚀</div>
      <div className="webdev-floating-element webdev-element-3">💻</div>
      <div className="webdev-floating-element webdev-element-4">🔥</div>
      <div className="webdev-floating-element webdev-element-5">🎯</div>
      <div className="webdev-floating-element webdev-element-6">⚡</div>
    </div>
  );

  return (
    <div className="webdev-page">
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="webdev-hero">
        <div className="container">
          <h2>Premium Web Solutions with Modern Stacks</h2>
          <p>
            Cutting-edge web development services powered by MERN, MEAN, and .NET technologies to elevate your digital
            presence and drive business growth.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="webdev-main container">
        <div className="section-title">
          <h2>Our Web Development Services</h2>
          <p>Comprehensive digital solutions built with modern technology stacks</p>
        </div>

        {/* Services Grid */}
        <div className="services-container">
          {/* MERN Stack Service */}
          <div className="service-card">
            <div className="service-header">
              <h3>MERN Stack Development</h3>
              <div className="service-tech">
                <span className="tech-badge">MongoDB</span>
                <span className="tech-badge">Express.js</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
              </div>
            </div>
            <div className="service-content">
              <p>
                Full-stack JavaScript solutions with React frontend and Node.js backend. Perfect for building scalable, 
                real-time applications with modern UI/UX.
              </p>
              <ul className="service-features">
                <li>Single Page Applications (SPA)</li>
                <li>Real-time Features with Socket.io</li>
                <li>RESTful & GraphQL APIs</li>
                <li>Progressive Web Apps (PWA)</li>
                <li>JWT Authentication</li>
                <li>Cloud Deployment Ready</li>
              </ul>
            </div>
          </div>

          {/* MEAN Stack Service */}
          <div className="service-card">
            <div className="service-header">
              <h3>MEAN Stack Development</h3>
              <div className="service-tech">
                <span className="tech-badge">MongoDB</span>
                <span className="tech-badge">Express.js</span>
                <span className="tech-badge">Angular</span>
                <span className="tech-badge">Node.js</span>
              </div>
            </div>
            <div className="service-content">
              <p>
                Enterprise-grade applications with Angular frontend and robust Node.js backend. Ideal for large-scale 
                business applications requiring TypeScript benefits.
              </p>
              <ul className="service-features">
                <li>Enterprise Application Development</li>
                <li>TypeScript Full-Stack</li>
                <li>Modular Architecture</li>
                <li>RxJS Reactive Programming</li>
                <li>Advanced Form Handling</li>
                <li>Enterprise Security</li>
              </ul>
            </div>
          </div>

          {/* .NET Development Service */}
          <div className="service-card">
            <div className="service-header">
              <h3>.NET Full Stack Development</h3>
              <div className="service-tech">
                <span className="tech-badge">ASP.NET Core</span>
                <span className="tech-badge">C#</span>
                <span className="tech-badge">SQL Server</span>
                <span className="tech-badge">React/Angular</span>
              </div>
            </div>
            <div className="service-content">
              <p>
                Robust Microsoft technology stack solutions with .NET Core backend and modern frontend frameworks. 
                Perfect for enterprise applications requiring high performance.
              </p>
              <ul className="service-features">
                <li>ASP.NET Core Web APIs</li>
                <li>Entity Framework Core</li>
                <li>SQL Server Integration</li>
                <li>Microservices Architecture</li>
                <li>Azure Cloud Deployment</li>
                <li>Enterprise Security</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="tech-showcase">
          <h3>Technologies We Master</h3>
          <div className="tech-grid">
            <div className="tech-item">
              <div className="tech-icon">⚛️</div>
              <h4>React.js</h4>
              <p>Modern component-based UI development</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">🅰️</div>
              <h4>Angular</h4>
              <p>Enterprise-grade TypeScript framework</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">🔷</div>
              <h4>Node.js</h4>
              <p>Server-side JavaScript runtime</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">⚡</div>
              <h4>.NET Core</h4>
              <p>High-performance C# framework</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">🗄️</div>
              <h4>MongoDB</h4>
              <p>NoSQL document database</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">🐘</div>
              <h4>SQL Server</h4>
              <p>Relational database management</p>
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="process">
          <div className="section-title">
            <h2>Our Development Process</h2>
            <p>Structured approach to deliver exceptional web solutions</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Requirement Analysis</h3>
              <p>Deep dive into your business goals, target audience, and technical requirements.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Technology Selection</h3>
              <p>Choose the optimal tech stack (MERN, MEAN, or .NET) based on project needs.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Architecture Design</h3>
              <p>Design scalable system architecture and database structure.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Agile Development</h3>
              <p>Iterative development with regular demos and feedback sessions.</p>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Quality Assurance</h3>
              <p>Comprehensive testing including unit, integration, and user acceptance testing.</p>
            </div>
            <div className="process-step">
              <div className="step-number">6</div>
              <h3>Deployment & Support</h3>
              <p>Production deployment, monitoring setup, and ongoing maintenance support.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="webdev-cta">
          <h3>Ready to Build Your Next Project?</h3>
          <p>Let's discuss how we can transform your ideas into powerful web applications</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn-primary">
              Start Your Project Today
            </a>
            {/* <a href="/portfolio" className="btn-secondary">
              View Our Portfolio
            </a> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default WebDevelopment;