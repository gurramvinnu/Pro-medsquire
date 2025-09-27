// 3. src/components/Header.js (From header.html, with mobile menu toggle)
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/company_logo_1.jpg';  // Adjust path to your logo

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Close menu on route change
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <img src={logo} alt="MedSquire Technologies Logo" style={{ width: '50px', borderRadius: '8px' }} />
          <h1>MedSquire Technologies</h1>
        </div>
        <nav id="nav">
          <ul className={isMenuOpen ? 'show' : ''}>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
            <li><NavLink to="/courses" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Courses</NavLink></li>
            <li><NavLink to="/web-development" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Web Development</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact Us</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink></li>
          </ul>
        </nav>
        <button id="menuToggle" className="menu-toggle" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>
    </header>
  );
}

export default Header;