import React, { useRef, useEffect, useState } from 'react';
import './Home.css';

// Import your images
import arun from '../assets/arun.jpeg';
import ravali_d from '../assets/ravali_d.jpeg';
import chandrani_m from '../assets/chandrani_m.jpeg';
import vinay_chaityana from '../assets/vinay_chaityana.jpeg';
import vinay_d from '../assets/vinay_d.jpeg';
import rakesh_l from '../assets/rakesh_l.JPG';
import kiran from '../assets/kiran.jpeg';
import sanjana from '../assets/Sanjana.jpeg';
import bannu from '../assets/Bannu.jpeg';
import keerthi from '../assets/keerthi.jpeg';
import suman from '../assets/suman.jpeg';
import rajya from '../assets/rajya.jpeg';
import liltha from '../assets/lilitha.jpg';

// Import company logos
import microsoftLogo from '../assets/microsoft.png';
import tekreantLogo from '../assets/tekreantLogo.png';
import vivanLogo from '../assets/vivan.png';
import warrousLogo from '../assets/warrous.png';
import inovarLogo from '../assets/inovar.png';
import eshipjectLogo from '../assets/Eshipject.png';
import wiproLogo from '../assets/wipro.png';
import computerSolutionLogo from '../assets/computer-solution.png';
import senwellLogo from '../assets/senwell.png';
import infosys from '../assets/infosys.jpg';

// Import section images
import section1Image from '../assets/section11.png';
import section2Image from '../assets/section2.png';
import section3Image from '../assets/section3.png';

// 3D Background Component
const ThreeDBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, ${Math.random() * 30 + 50}%)`;
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = 0.1 * (1 - distance / 100);
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="three-d-background" />;
};

// Floating Elements Component
const FloatingElements = () => {
  return (
    <div className="floating-elements">
      <div className="floating-element element-1">🚀</div>
      <div className="floating-element element-2">💻</div>
      <div className="floating-element element-3">⭐</div>
      <div className="floating-element element-4">🔥</div>
      <div className="floating-element element-5">👨‍💻</div>
    </div>
  );
};

// Progress Indicator Component
const ProgressIndicator = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="progress-indicator" onClick={scrollToTop}>
      <div className="progress-circle">
        <svg width="50" height="50" viewBox="0 0 50 50">
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="#3b82f6"
            strokeWidth="3"
            fill="none"
            strokeDasharray="125.6"
            strokeDashoffset={125.6 - (125.6 * progress) / 100}
            transform="rotate(-90 25 25)"
          />
        </svg>
        <div className="progress-text">{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

// WhatsApp Icon Component
const WhatsAppIcon = () => {
  const phoneNumber = "9014312221";
  const message = "Hello! I'm interested in learning more about your courses.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

// Section 1: Hero Section - Updated with left-aligned text
const HeroSection = () => {
  return (
    <section
      className="hero-section"
      id="section1"
      style={{ backgroundImage: `url(${section1Image}), linear-gradient(135deg, var(--darker) 0%, #1e3a8a 100%)` }}
    >
      <ThreeDBackground />
      <FloatingElements />
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <div className="hero-text hero-text-left">
          <h1 className="hero-title">
            Mastering full stack development isn't just a skill it's your passport to campus placement success
          </h1>
          <div className="hero-buttons">
            <a href="/contact" className="btn btn-hero btn-3d">
              <span className="btn-front">Contact Us</span>
              <span className="btn-back">Get Started →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 2: Why Travel Section - Enhanced text
const WhyTravelSection = () => {
  return (
    <section className="content-section enhanced-section" id="section2">
      <div className="container">
        <div className="content-grid">
          <div className="content-text enhanced-text">
            <h2 className="enhanced-heading">
              Why travel to Hyderabad when <span className="highlight-text">excellence</span> is right here at your hometown Eluru
            </h2>
            <p className="enhanced-paragraph">
              Get the same <strong>quality education</strong> and <strong>placement opportunities</strong> without leaving your hometown. Our institute brings Hyderabad-level training to Eluru with <em>experienced faculty</em> and <em>industry-relevant curriculum</em>.
            </p>
            <div className="feature-tags">
              <span className="feature-tag">🏠 Study in Hometown</span>
              <span className="feature-tag">💼 Top Placements</span>
              <span className="feature-tag">👨‍🏫 Expert Faculty</span>
            </div>
          </div>
          <div className="content-image">
            <div className="image-container-3d">
              <img src={section2Image} alt="Eluru Campus" />
              <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 3: Level Up Career Section - Enhanced text
const LevelUpSection = () => {
  return (
    <section className="content-section enhanced-section" id="section3">
      <div className="container">
        <div className="content-grid reverse">
          <div className="content-text enhanced-text">
            <h2 className="enhanced-heading">
              Level up your career—start your <span className="highlight-text">Full Stack journey</span> with Medsquire in Eluru! 🚀💻
            </h2>
            <p className="enhanced-paragraph">
              Join our <strong>comprehensive Full Stack Development program</strong> and transform your career. Get hands-on experience with modern technologies and secure your dream job in top companies.
            </p>
            <ul className="benefits-list enhanced-benefits">
              <li>✅ <strong>Industry Expert Trainers</strong> - Learn from professionals</li>
              <li>✅ <strong>100% Placement Assistance</strong> - Guaranteed career support</li>
              <li>✅ <strong>Live Project Experience</strong> - Real-world applications</li>
              <li>✅ <strong>Flexible Batch Timings</strong> - Study at your convenience</li>
              <li>✅ <strong>Modern Curriculum</strong> - Latest technologies & tools</li>
            </ul>
          </div>
          <div className="content-image">
            <div className="image-container-3d">
              <img src={section3Image} alt="Full Stack Development" />
              <div className="rotating-elements">
                <div className="rotating-element re-1">⚡</div>
                <div className="rotating-element re-2">🚀</div>
                <div className="rotating-element re-3">💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 4: Advanced Software Training
const CoursesSection = () => {
  const courses = [
    { 
      name: "MEAN Stack", 
      subCourses: ["Angular", "Node.js", "Express.js", "MongoDB"],
      description: "Full stack development with JavaScript technologies",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    { 
      name: "MERN Stack", 
      subCourses: ["React", "Node.js", "Express.js", "MongoDB"],
      description: "Modern React-based full stack development",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    { 
      name: "Dot Net", 
      subCourses: [".NET API", ".NET core", "SQL Server"],
      description: "Microsoft technology stack development",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    { 
      name: "Data Base", 
      subCourses: ["MySql", "MsSql", "Mongodb"],
      description: "Structure and Non Structure Database Management",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    { 
      name: "Azure", 
      subCourses: ["Azure Fundamentals", "Azure DevOps", "Cloud Services", "Storage"],
      description: "Microsoft cloud computing services",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    { 
      name: "Prompt Engineering", 
      subCourses: ["AI Prompting", "LLM Optimization", "Content Generation", "AI Tools"],
      description: "Master AI communication and optimization",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    }
  ];

  return (
    <section className="courses-section" id="section4">
      <div className="section-background"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title-3d">
            <span>Advanced Software</span>
            <span className="highlight-3d">Training Institute</span>
            <span>Specialized Courses</span>
          </h2>
          <p className="section-subtitle">Comprehensive curriculum designed for industry readiness</p>
        </div>
        
        <div className="courses-grid-3d">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="course-card-3d"
              style={{ '--card-gradient': course.gradient } }
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-icon">
                    <i className={`fas ${getCourseIcon(course.name)}`}></i>
                  </div>
                  <h3>{course.name}</h3>
                  <p>{course.description}</p>
                  <div className="card-hint">Hover to Explore</div>
                </div>
                
                <div className="card-back">
                  <h4>Courses Covered:</h4>
                  <div className="sub-courses-3d">
                    {course.subCourses.map((subCourse, subIndex) => (
                      <span key={subIndex} className="sub-course-3d">
                        {subCourse}
                      </span>
                    ))}
                  </div>
                  <a href="/courses" className="btn-card-3d">
                    Explore Course
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 5: Student Diversity Section
const StudentDiversitySection = () => {
  return (
    <section className="statistics-diversity-section" id="section5">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title-3d">
            <span>Our Student</span>
            <span className="highlight-3d">Diversity</span>
          </h2>
        </div>
        <div className="diversity-card">
          <div className="diversity-grid">
            <div className="diversity-category">
              <h4>From Various Degrees</h4>
              <div className="degree-list">
                <span>BE/BTECH</span>
                <span>BCA/BSC</span>
                <span>BCOM</span>
                <span>MCA</span>
                <span>ME/MTECH</span>
                <span>MBA</span>
                <span>MSC</span>
                <span>MORE...</span>
              </div>
            </div>
            <div className="diversity-category">
              <h4>From Various Streams</h4>
              <div className="stream-list">
                <span>CS</span>
                <span>EEE</span>
                <span>IT</span>
                <span>CME</span>
                <span>ECE</span>
                <span>ME</span>
                <span>IS</span>
                <span>CIV</span>
                <span>MORE...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 6: Placements Section
const PlacementSection = () => {
  const placementData = [
   { 
      name: "B lalitha Bhashini", 
      role: "Software Developer", 
      package: "₹ 6.0 LPA",
      image: liltha,
      logo: infosys
    },
    { 
    
     name: "Chandrani Madhira", 
      role: "Partner Technical Advisor", 
      package: "₹ 9.0 LPA",
      image: chandrani_m,
      logo: microsoftLogo
    },
    { 
      name: "Arun Sai Katta", 
      role: "Software Developer", 
      company: "Tekreant",
      package: "₹ 7.6 LPA",
      image: arun,
      logo: tekreantLogo
    },
    { 
      name: "Bannu Akkabattula", 
      role: "Software Developer", 
      company: "Vivan Global",
      package: "₹ 5.0 LPA",
      image: bannu,
      logo: vivanLogo
    },
    { 
      name: "Rajyalakshmi Chava", 
      role: "Software Engineer", 
      company: "Warrous",
      package: "₹ 6.0 LPA",
      image: rajya,
      logo: warrousLogo
    },
    { 
      name: "Kiran Kumar Palaparthi", 
      role: "Software Developer", 
      company: "INOVAR",
      package: "₹ 7.2 LPA",
      image: kiran,
      logo: inovarLogo
    },
    { 
      name: "Sanjana Atluri", 
      role: "Software Engineer", 
      company: "Eshipject",
      package: "₹ 5.5 LPA",
      image: sanjana,
      logo: eshipjectLogo
    },
    { 
      name: "Vinay Dasari", 
      role: "Software Developer", 
      company: "Tekreant",
      package: "₹ 5.6 LPA",
      image: vinay_d,
      logo: tekreantLogo
    },
    { 
      name: "Keerthi Sana", 
      role: "Software Engineer", 
      company: "Wipro",
      package: "₹ 4.8 LPA",
      image: keerthi,
      logo: wiproLogo
    },
    { 
      name: "Rakesh Lakkam", 
      role: "Software Engineer", 
      company: "Computer Solution LLP",
      package: "₹ 7.0 LPA",
      image: rakesh_l,
      logo: computerSolutionLogo
    },
    { 
      name: "Vinay Chaitanya", 
      role: "Software Developer", 
      company: "Tekreant",
      package: "₹ 5.2 LPA",
      image: vinay_chaityana,
      logo: tekreantLogo
    },
    { 
      name: "Ravali Dasari", 
      role: "Software Developer", 
      company: "Tekreant",
      package: "₹ 5.6 LPA",
      image: ravali_d,
      logo: tekreantLogo
    },
    { 
      name: "Suman Raj Vulli", 
      role: "Software Developer", 
      package: "₹ 5.0 LPA",
      image: suman,
      logo: senwellLogo
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="placements-section" id="section6">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title-3d">
            <span>Our Successful</span>
            <span className="highlight-3d">Placements</span>
          </h2>
          <p>Meet our talented graduates who are making an impact in the tech industry</p>
        </div>

        <div className="placement-container">
          <button className="scroll-btn placement-scroll-left" onClick={scrollLeft}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="placement-scroll" ref={scrollRef}>
            {placementData.map((student, index) => (
              <div key={index} className="placement-card">
                <div className="placement-image-container">
                  <img src={student.image} alt={student.name} className="placement-image" />
                  <div className="placement-overlay">
                    <h4>{student.name}</h4>
                    <p>{student.role}</p>
                  </div>
                </div>
                <div className="placement-info">
                  <div className="company-info">
                    <img src={student.logo} alt={student.company} className="company-logo" />                  
                  </div>
                 
                </div>
                 <div className="package-info">
                    <span className="package">{student.package}</span>
                  </div>
              </div>
            ))}
          </div>

          <button className="scroll-btn placement-scroll-right" onClick={scrollRight}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

// Section 7: Reviews Section
const ReviewsSection = () => {
  const reviews = [
    {
      name: "Harika",
      role: "Full Stack Developer",
      rating: 4.5,
      comment: "Career Success is the best learning platform in Eluru. Faculty is very good and also provide the campus connect. The practical approach to learning helped me secure a job immediately after completion.",
      verified: true,
      course: "MERN Stack"
    },
    {
      name: "Syam",
      role: "Software Engineer",
      rating: 5,
      comment: "The process that they take you through is excellent and essential for any IT professional. The placement assistance and interview preparation were particularly helpful in my career growth.",
      verified: true,
      course: "MEAN Stack"
    },
    {
      name: "Kiran Kumar",
      role: "QA Engineer",
      rating: 4.5,
      comment: "Exceptional training institute for aspiring testers. I had an extraordinary experience with comprehensive training that covered all aspects of software testing and quality assurance.",
      verified: true,
      course: "Software Testing"
    },
    {
      name: "Priya Sharma",
      role: "Frontend Developer",
      rating: 4,
      comment: "The instructors are very knowledgeable and the curriculum is up-to-date with industry standards. The hands-on projects helped me build a strong portfolio.",
      verified: true,
      course: "React Development"
    },
    {
      name: "Rahul Kumar",
      role: "Backend Developer",
      rating: 5,
      comment: "Outstanding training program! The faculty's industry experience and personalized attention helped me transition from a fresher to a professional developer.",
      verified: true,
      course: "Node.js Development"
    },
    {
      name: "Sneha Reddy",
      role: "Full Stack Developer",
      rating: 4.5,
      comment: "The placement support was exceptional. I received multiple job offers even before completing the course. Highly recommended for career changers.",
      verified: true,
      course: "MERN Stack"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prev) => 
      prev + visibleCount >= reviews.length ? 0 : prev + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? reviews.length - visibleCount : prev - 1
    );
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + visibleCount);

  return (
    <section className="reviews-section" id="section7">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title-3d">
            <span>What Our</span>
            <span className="highlight-3d">Students Say</span>
          </h2>
          <p>Real experiences from our successful students</p>
        </div>

        <div className="reviews-container">
          <button className="scroll-btn review-scroll-left" onClick={prevReview}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="reviews-grid">
            {visibleReviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <h4>{review.name}</h4>
                    <p className="reviewer-role">{review.role}</p>
                    <p className="reviewer-course">{review.course}</p>
                  </div>
                  <div className="review-rating">
                    {'★'.repeat(Math.floor(review.rating))}
                    {'☆'.repeat(5 - Math.floor(review.rating))}
                    <span className="rating-text">{review.rating}/5</span>
                  </div>
                </div>
                
                <div className="review-content">
                  <p className="review-comment">"{review.comment}"</p>
                  
                  {review.verified && (
                    <div className="verified-badge">
                      <i className="fas fa-check-circle"></i> Verified Student
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button className="scroll-btn review-scroll-right" onClick={nextReview}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="reviews-indicators">
          {Array.from({ length: Math.ceil(reviews.length / visibleCount) }).map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentIndex === index * visibleCount ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index * visibleCount)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 8: Statistics Section (Numbers)
const StatisticsSection = () => {
  const [counters, setCounters] = useState({
    students: 0,
    placements: 0,
    companies: 0
  });

  useEffect(() => {
    const targetValues = { students: 100, placements: 95, companies: 25 };
    const duration = 2000;
    const steps = 60;
    const stepValues = {
      students: targetValues.students / steps,
      placements: targetValues.placements / steps,
      companies: targetValues.companies / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounters({
        students: Math.min(Math.floor(stepValues.students * currentStep), targetValues.students),
        placements: Math.min(Math.floor(stepValues.placements * currentStep), targetValues.placements),
        companies: Math.min(Math.floor(stepValues.companies * currentStep), targetValues.companies)
      });

      if (currentStep >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="statistics-section" id="section8">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number" data-count="200">{counters.students}+</div>
            <div className="stat-label">Trained Students</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-count="50">{counters.placements}+</div>
            <div className="stat-label">Successful Placements</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-count="25">{counters.companies}+</div>
            <div className="stat-label">Partner Companies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function for course icons
const getCourseIcon = (courseName) => {
  const icons = {
    "MEAN Stack": "fa-code",
    "MERN Stack": "fa-laptop-code",
    "Dot Net": "fa-windows",
    "Azure": "fa-cloud",
    "Prompt Engineering": "fa-robot",
    "Data Base": "fa-database"
  };
  return icons[courseName] || "fa-book";
};

// Main Home Component
function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <WhyTravelSection />
      <LevelUpSection />
      <CoursesSection />
      <StudentDiversitySection />
      <PlacementSection />
      <ReviewsSection />
      <StatisticsSection />
      <ProgressIndicator />
      <WhatsAppIcon />
    </div>
  );
}

export default Home;