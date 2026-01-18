import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import '../styles/responsive.css';

const Footer = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = '9335699920';
    const message = encodeURIComponent('Hello AXN SOLUTION, I am interested in your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src="/auratech-logo.svg" alt="AXN SOLUTION" className="footer-logo" />
          <h3>AXN SOLUTION</h3>
          <p>
            Professional web development service provider focused on building modern, responsive, and high-quality websites for businesses and startups using React JS.
          </p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/" onClick={() => scrollToSection('home')}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection('about')}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection('services')}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection('portfolio')}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection('contact')}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Services</h3>
          <ul className="footer-links">
            <li>
              <Link to="/" onClick={() => scrollToSection('services')}>
                Website Development
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection('services')}>
                React JS Development
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection('services')}>
                Responsive Design
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection('services')}>
                Business Websites
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSection('services')}>
                Data Science Projects
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>
            <strong>Email:</strong> akshatsoni193@gmail.com
          </p>
          <p>
            <strong>Mobile:</strong> 9335699920
          </p>
          <button 
            onClick={handleWhatsAppContact}
            className="whatsapp-btn"
            style={{ marginTop: '1rem' }}
          >
            <span>💬</span>
            Chat on WhatsApp
          </button>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 AXN SOLUTION. All rights reserved. | Professional Web Development Services</p>
      </div>
    </footer>
  );
};

export default Footer;
