import React from 'react';
import '../styles/services.css';
import '../styles/responsive.css';

const Portfolio = () => {
  const projects = [
    {
      name: 'Skill.ai Training',
      type: 'Website Development & Data Science Project',
      description: 'A comprehensive training platform featuring advanced data visualization, interactive learning modules, and AI-powered skill assessment tools. Built with React JS and integrated with machine learning APIs.',
      image: '🤖'
    },
    {
      name: 'E-Commerce Platform',
      type: 'Website Development',
      description: 'Modern e-commerce solution with real-time inventory management, secure payment processing, and responsive design. Optimized for conversions and user experience.',
      image: '🛒'
    },
    {
      name: 'Business Dashboard',
      type: 'React JS Development',
      description: 'Analytics dashboard for business intelligence with real-time data visualization, customizable widgets, and comprehensive reporting features.',
      image: '📈'
    }
  ];

  return (
    <section id="portfolio" className="section portfolio">
      <div className="section-title">
        <h2>Our Portfolio</h2>
        <p>Explore our recent projects and see how we've helped businesses succeed online</p>
      </div>
      
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card">
            <div className="portfolio-image">
              {project.image}
            </div>
            <div className="portfolio-content">
              <h3>{project.name}</h3>
              <div className="project-type">{project.type}</div>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
