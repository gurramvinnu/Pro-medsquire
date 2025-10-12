import React, { useRef, useEffect, useState } from 'react';
import './Home.css';

// Import your images
import arun from '../assets/arun.jpeg';
import ravali_d from '../assets/ravali_d.jpeg';
import chandrani_m from '../assets/chandrani_m.jpeg';
import vinay_chaityana from '../assets/vinay_chaityana.jpeg';
import vinay_d from '../assets/vinay_d.jpeg';
import rakesh_l from '../assets/rakesh_l.JPG';
import kiran from '../assests/kiran.jpeg';
import sanjana from '../assests/Sanjana.jpeg';
import keerthi from '../assests/keerthi.jpeg';
import suman from '../assests/suman.jpeg';

import rajya from '../assests/rajya.jpeg';

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">Mastering full stack development isn’t just a skill—it’s your passport to campus placement success</h1>
        <p className="hero-subtitle">Why travel to Hyderabad when simialary is right here at home-town Eluru</p>
        <p className="hero-description">
            Level up your career—start your Full Stack journey with Medsquire in Eluru! 🚀💻
        </p>
        <a href="/contact" className="btn btn-hero">Connect with Us</a>
      </div>
    </section>
  );
};

// // Faculty Guidance Section
// const FacultySection = () => {
//   return (
//     <section className="faculty-section">
//       <div className="container">
//         <div className="faculty-content">
//           <div className="faculty-text">
//             <h2>Get Experienced Faculty Guidance</h2>
//             <p>
//               Discover our team of experienced faculty who bring a wealth of teaching expertise 
//               and real-world knowledge to every classroom. With qualifications, teaching evaluations, 
//               and industry experience, they ensure effective instruction and mentorship for your academic journey.
//             </p>
//             <div className="faculty-stats">
//               <div className="stat-card">
//                 <h3>100+</h3>
//                 <p>Experienced Trainers</p>
//               </div>
//               <div className="stat-card">
//                 <h3>4.3/5</h3>
//                 <p>Average Support Rating</p>
//               </div>
//               <div className="stat-card">
//                 <h3>1:1</h3>
//                 <p>Support Program</p>
//               </div>
//             </div>
//             <button className="btn btn-faculty">Ring just a call back</button>
//           </div>
//           <div className="faculty-image">
//             <div className="image-placeholder">
//               <i className="fas fa-chalkboard-teacher"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// Student Statistics Section
const StatisticsSection = () => {
  return (
    <section className="statistics-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Student Diversity</h2>
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

// Enhanced Courses Section
const CoursesSection = () => {
  const courses = [
    { 
      name: "MEAN Stack", 
      subCourses: ["Angular", "Node.js", "Express.js", "MongoDB"],
      description: "Full stack development with JavaScript technologies"
    },
    { 
      name: "MERN Stack", 
      subCourses: ["React", "Node.js", "Express.js", "MongoDB"],
      description: "Modern React-based full stack development"
    },
    { 
      name: "Dot Net", 
      subCourses: [".NET API", ".NET core", "SQL Server"],
      description: "Microsoft technology stack development"
    },
     { 
      name: "Data Base", 
      subCourses: ["MySql", "MsSql", "Mongodb"],
      description: "Structure  and Non Structure  Database Management"
    },
    { 
      name: "Azure", 
      subCourses: ["Azure Fundamentals", "Azure DevOps", "Cloud Services", "Storage"],
      description: "Microsoft cloud computing services"
    },
    { 
      name: "Prompt Engineering", 
      subCourses: ["AI Prompting", "LLM Optimization", "Content Generation", "AI Tools"],
      description: "Master AI communication and optimization"
    }
   
  ];

  return (
    <section className="courses-section">
      <div className="container">
        <div className="section-header">
          <h2>Transform Your Career: Advanced Software Training Institute Unveils Specialized Courses</h2>
          <p>Comprehensive curriculum designed for industry readiness</p>
        </div>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-header">
                <div className="course-icon">
                  <i className={`fas ${getCourseIcon(course.name)}`}></i>
                </div>
                <div className="course-title">
                  <h3>{course.name}</h3>
                  <p className="course-description">{course.description}</p>
                </div>
              </div>
              
              <div className="sub-courses">
                <h4>Courses Covered:</h4>
                <div className="sub-courses-list">
                  {course.subCourses.map((subCourse, subIndex) => (
                    <span key={subIndex} className="sub-course-item">
                      {subCourse}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="course-footer">
                <a href="/courses" className="btn btn-course">
                  Explore <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
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
    "Data Base": "fa-brain"
  };
  return icons[courseName] || "fa-book";
};

// Reviews Section
const ReviewsSection = () => {
  const reviews = [
    {
      name: "harika",
      date: "2024-01-15",
      rating: 4.5,
      comment: "carrer Success is the best learning platform in eluru. Faculty is very good and also provide the campus connect... Read more",
      verified: true
    },
    {
      name: "syam",
      date: "2024-01-12",
    rating: 5 ,
      comment: "the process that they take you through is good and should have for an IT professional and the... Read more",
      verified: true
    },
    {
      name: "Kiran Kumar",
      date: "2024-01-09",
      rating: 4.5,
      comment: "Exceptional Training Institute Aspiring Testers. I had an extraordinary experience with comprehensive training... Read more",
      verified: true
    }
  ];

  return (
    <section className="reviews-section">
      <div className="container">
        <div className="reviews-header">
          <h2>What Our Students Say</h2>
          <div className="reviews-summary">
            <div className="rating-overview">
              <div className="stars">
                {'★'.repeat(5)}
              </div>
              <span>100+ Google reviews</span>
            </div>
            
          </div>
        </div>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <h4>{review.name}</h4>
                  <span className="review-date">{review.date}</span>
                </div>
                <div className="review-rating">
                  {'★'.repeat(review.rating)}
                </div>
              </div>
              <p className="review-comment">"{review.comment}"</p>
              {review.verified && (
                <div className="verified-badge">
                  <i className="fas fa-check-circle"></i> Verified Student
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Placement Section (Enhanced)
const PlacementSection = () => {
 const placementData = [
    { 
      name: "Chandrani Madhira", 
      role: "Partner Technical Advisor", 
      company: "Microsoft",
      package: "₹ 9.0 LPA",
      image: chandrani_m
    },
    { 
      name: "Arun Sai Katta", 
      role: "Software Developer", 
      company: "Tekreant",
      package: "₹ 7.6 LPA",
      image: arun
    },
    { 
      name: "Bannu Akkabattula", 
      role: "Software Developer", 
      company: "Vivan Global",
      package: "₹ 5.0 LPA",
      image: bannu
    },
    { 
      name: "Rajyalakshmi Chava", 
      role: "Software Engineer", 
      company: "Warrous",
      package: "₹ 6.0 LPA",
      image: rajya
    },
    { 
      name: "Kiran Kumar Palaparthi", 
      role: "Software Developer", 
      company: "INOVAR",
      package: "₹ 7.2 LPA",
      image: kiran
    },
    { 
      name: "Sanjana Atluri", 
      role: "Software Engineer", 
      company: "Eshipject",
      package: "₹ 5.5 LPA",
      image: sanjana
    },
    { 
      name: "Vinay Dasari", 
      role: "Software Developer", 
      company: "Tekreant",
      package: "₹ 5.6 LPA",
      image: vinay_d
    },
    { 
      name: "Keerthi Sana", 
      role: "Software Engineer", 
      company: "Wipro",
      package: "₹ 4.8 LPA",
      image: keerthi
    },
    { 
      name: "Rakesh Lakkam", 
      role: "Software Engineer", 
      company: "Computer Solution LLP",
      package: "₹ 7.0 LPA",
      image: rakesh_l
    },
    { 
      name: "Vinay Chaitanya", 
      role: "Software Developer", 
      company: "Tekreant",
      package: "₹ 5.2 LPA",
      image: vinay_chaityana
    },
    { 
      name: "Ravali Dasari", 
      role: "Software Developer", 
      company: "Tekreant",
      package: "₹ 5.6 LPA",
      image: ravali_d
    },
    { 
      name: "Suman Raj Vulli", 
      role: "Software Developer", 
      company: "Senwell Group",
      package: "₹ 5.0 LPA",
      image: suman
    },
  ];

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      return () => scrollElement.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

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

  const getCompanyInitials = (companyName) => {
    return companyName.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  return (
    <section className="placements-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Successful Placements</h2>
          <p>Meet our talented graduates who are making an impact in the tech industry</p>
        </div>
        <div className="profiles-container">
          <button 
            className="scroll-btn scroll-left" 
            onClick={scrollLeft}
            style={{ opacity: canScrollLeft ? 1 : 0.5 }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="profiles-scroll" ref={scrollRef}>
            {placementData.map((student, index) => (
              <div key={index} className="profile-card">
                <div className="profile-img-container">
                  <img src={student.image} alt={student.name} className="profile-img" />
                  <div className="profile-overlay">
                    <div className="profile-name">{student.name}</div>
                    <div className="profile-role">{student.role}</div>
                  </div>
                </div>
                <div className="profile-content">
                  <div className="profile-company">
                    <div className="company-logo">{getCompanyInitials(student.company)}</div>
                    <span>{student.company}</span>
                  </div>
                  <div className="profile-details">
                    <div className="profile-package">{student.package}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button 
            className="scroll-btn scroll-right" 
            onClick={scrollRight}
            style={{ opacity: canScrollRight ? 1 : 0.5 }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

// Main Home Component
function Home() {
  return (
    <div className="home-page">
      <HeroSection />
       <CoursesSection />
       <PlacementSection />
      {/* <FacultySection /> */}
      <StatisticsSection />
      <ReviewsSection />
     
    </div>
  );
}

export default Home;
