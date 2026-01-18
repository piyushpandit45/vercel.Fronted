import React from 'react';
import '../styles/services.css';
import '../styles/responsive.css';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Website Development',
      description: 'Custom websites built with modern technologies to meet your specific business needs and deliver exceptional user experiences.'
    },
    {
      icon: '⚛️',
      title: 'React JS Development',
      description: 'Expert React JS development services creating fast, scalable, and interactive web applications with component-based architecture.'
    },
    {
      icon: '📱',
      title: 'Responsive Website Design',
      description: 'Mobile-first design approach ensuring your website looks perfect and functions flawlessly on all devices and screen sizes.'
    },
    {
      icon: '🏢',
      title: 'Business Websites',
      description: 'Professional corporate websites designed to establish your brand presence and effectively communicate your business value.'
    },
    {
      icon: '🚀',
      title: 'Startup Websites',
      description: 'Agile and scalable website solutions for startups, designed to grow with your business and attract investors.'
    },
    {
      icon: '📊',
      title: 'Data Science Projects',
      description: 'Advanced data visualization and analytics solutions to help you make informed business decisions.'
    }
  ];

  return (
    <section id="services" className="section">
      <div className="section-title">
        <h2>Our Services</h2>
        <p>We offer comprehensive web development solutions tailored to your business needs</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
