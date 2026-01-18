import React from 'react';
import '../styles/home.css';
import '../styles/responsive.css';

const Hero = () => {
  const handleGetQuote = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = '9335699920';
    const message = encodeURIComponent('Hello AXN SOLUTION, I am interested in your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="animate-fadeIn">
            We Build Modern & Responsive Websites
          </h1>
          <p className="animate-fadeIn">
            AXN SOLUTION delivers professional React JS solutions for businesses and startups.
          </p>
          <div className="hero-buttons animate-fadeIn">
            <button 
              onClick={handleGetQuote}
              className="btn btn-primary"
            >
              Get Free Quote
            </button>
            <button 
              onClick={handleWhatsAppContact}
              className="btn btn-secondary"
            >
              WhatsApp Contact
            </button>
          </div>
        </div>
        <div className="hero-image animate-fadeIn">
          <div className="hero-image-placeholder">
            <span>🚀 Modern Web Development</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
