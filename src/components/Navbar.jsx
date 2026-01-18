import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import '../styles/responsive.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (e, path) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      scrollToSection(path.substring(1));
    }
    setIsMobileMenuOpen(false);
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/auratech-logo.svg" alt="AXN SOLUTION" className="navbar-logo-img" />
        </Link>

        <button 
          className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {isHomePage ? (
            <>
              <li>
                <a 
                  href="#home" 
                  className="navbar-link"
                  onClick={(e) => handleNavClick(e, '#home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="navbar-link"
                  onClick={(e) => handleNavClick(e, '#about')}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="navbar-link"
                  onClick={(e) => handleNavClick(e, '#services')}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  className="navbar-link"
                  onClick={(e) => handleNavClick(e, '#portfolio')}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="navbar-link"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Contact
                </a>
              </li>
              <li>
                <Link 
                  to="/internship" 
                  className="navbar-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Internship
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link 
                  to="/" 
                  className="navbar-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  className="navbar-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  className="navbar-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  className="navbar-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/" 
                  className="navbar-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/internship" 
                  className="navbar-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Internship
                </Link>
              </li>
            </>
          )}
          <li>
            <Link 
              to="/login" 
              className="navbar-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          </li>
          <li>
            <Link 
              to="/register" 
              className="navbar-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
