import React from 'react';
import '../styles/about.css';
import '../styles/responsive.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="about-content">
        <div className="about-text">
          <h3>About AXN SOLUTION</h3>
          <p>
            AXN SOLUTION is a professional web development service provider with extensive experience in building modern, responsive, and high-quality websites for businesses and startups.
          </p>
          <p>
            We specialize in React JS development and have successfully delivered numerous projects that help our clients establish a strong online presence and achieve their business goals.
          </p>
          <p>
            Our team is committed to delivering excellence through quality code, exceptional performance, and modern UI/UX design principles that ensure your website stands out in today's competitive digital landscape.
          </p>
          
          <div className="about-features">
            <div className="about-feature">
              <div className="about-feature-icon">
                <span>⚡</span>
              </div>
              <div className="about-feature-text">
                <h4>Fast Performance</h4>
                <p>Optimized code for lightning-fast loading speeds</p>
              </div>
            </div>
            
            <div className="about-feature">
              <div className="about-feature-icon">
                <span>📱</span>
              </div>
              <div className="about-feature-text">
                <h4>Fully Responsive</h4>
                <p>Perfect display on all devices and screen sizes</p>
              </div>
            </div>
            
            <div className="about-feature">
              <div className="about-feature-icon">
                <span>🎨</span>
              </div>
              <div className="about-feature-text">
                <h4>Modern Design</h4>
                <p>Contemporary UI that engages and converts</p>
              </div>
            </div>
            
            <div className="about-feature">
              <div className="about-feature-icon">
                <span>🔧</span>
              </div>
              <div className="about-feature-text">
                <h4>Scalable Solutions</h4>
                <p>Built to grow with your business needs</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-image">
          <div className="hero-image-placeholder">
            <span>💼 Professional Development</span>
          </div>
        </div>
      </div>
      
      {/* Meet Our Founders Section */}
      <div className="founders-section mt-20">
        <div className="section-title">
          <h2>Meet Our Founders</h2>
          <p>The visionaries behind AXN SOLUTION's success</p>
        </div>
        
        <div className="founders-grid">
          <div className="founder-card">
            <div className="founder-image">
              <img src="/img2.jpeg" alt="Akshat Soni" className="founder-avatar-img" />
            </div>
            <div className="founder-content">
              <h3>Akshat Soni</h3>
              <div className="founder-role">Founder & Lead Web Development Architect</div>
              <div className="founder-title">Web Development Expert</div>
              <p className="founder-bio">
                Akshat Soni is a web development expert with strong experience in building modern, responsive, and scalable web applications. He focuses on delivering high-quality solutions for businesses and startups.
              </p>
            </div>
          </div>
          
          <div className="founder-card">
            <div className="founder-image">
              <img src="/img1.png" alt="Piyush Kumar Ameta" className="founder-avatar-img" />
            </div>
            <div className="founder-content">
              <h3>Piyush Kumar Ameta</h3>
              <div className="founder-role">Co-Founder & AI / Machine Learning Specialist</div>
              <div className="founder-title">AI & ML Expert</div>
              <p className="founder-bio">
                Piyush Kumar Ameta is an AI & ML expert with hands-on experience in data-driven solutions and intelligent systems. He contributes to innovation and advanced technology integration at AXN SOLUTION.
              </p>
            </div>
          </div>
          
          <div className="founder-card">
            <div className="founder-image">
              <img src="/img3.jpeg" alt="Ashish Raj" className="founder-avatar-img" />
            </div>
            <div className="founder-content">
              <h3>Ashish Raj</h3>
              <div className="founder-role">Backend Developer & Database Engineer</div>
              <div className="founder-title">Backend Specialist</div>
              <p className="founder-bio">
                Ashish Raj is a backend development specialist with expertise in database engineering and server-side architecture. He ensures robust, scalable, and efficient backend solutions for all AXN SOLUTION projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
