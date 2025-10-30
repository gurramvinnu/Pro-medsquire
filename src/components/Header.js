import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/company_logo_1.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  // Hide/show header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        // Show header at top of page
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Show header when scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY + 10) {
        // Hide header when scrolling down
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? 'visible' : 'visible'}`}>
      <div className="container header-container">
        <div className="logo-brand">
          <div className="logo">
            <img src={logo} alt="MedSquire Technologies Logo" />
          </div>
          <div className="brand-text">
            <h1>MedSquire Technologies</h1>
            <span className="tagline">Code. Create. Conquer.</span>
          </div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <i className="fas fa-home"></i>
                <span>Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/courses" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <i className="fas fa-graduation-cap"></i>
                <span>Courses</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/web-development" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <i className="fas fa-code"></i>
                <span>Web Development</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <i className="fas fa-envelope"></i>
                <span>Contact</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <i className="fas fa-info-circle"></i>
                <span>About</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="/contact" className="btn btn-primary btn-small">
            Get Started
          </a>
          <button className="menu-toggle" onClick={toggleMenu}>
            <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;