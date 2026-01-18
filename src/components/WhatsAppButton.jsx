import React from 'react';
import '../styles/contact.css';
import '../styles/responsive.css';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '9335699920';
    const message = encodeURIComponent('Hello AXN SOLUTION, I am interested in your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button 
      className="whatsapp-float"
      onClick={handleWhatsAppClick}
      aria-label="Contact on WhatsApp"
    >
      <span>💬</span>
    </button>
  );
};

export default WhatsAppButton;
