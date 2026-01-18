import React, { useState } from 'react';
import '../styles/contact.css';
import '../styles/responsive.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Real API call to backend
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        
        // Clear message after 5 seconds
        setTimeout(() => {
          setSubmitMessage('');
        }, 5000);
      } else {
        setSubmitMessage('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = '9335699920';
    const message = encodeURIComponent('Hello AXN SOLUTION, I am interested in your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="section">
      <div className="section-title">
        <h2>Get In Touch</h2>
        <p>Ready to start your next project? Contact us today for a free consultation</p>
      </div>
      
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your project..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {submitMessage && (
            <div className="mt-4 p-4 bg-green text-white rounded-lg">
              {submitMessage}
            </div>
          )}
        </form>
        
        <div className="contact-info">
          <h3>Other Ways to Reach Us</h3>
          <p>
            <strong>Email:</strong> akshatsoni193@gmail.com
          </p>
          <p>
            <strong>WhatsApp:</strong> +91 9335699920
          </p>
          <p>
            <strong>Response Time:</strong> Within 24 hours
          </p>
          
          <button 
            onClick={handleWhatsAppContact}
            className="whatsapp-btn"
          >
            <span>💬</span>
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
