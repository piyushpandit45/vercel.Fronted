import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/internship.css';
import '../styles/responsive.css';

const Internship = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: 'Website Development',
      description: 'Learn modern web development with React, Node.js, and latest industry technologies.',
      image: '/img4.png'
    },
    {
      id: 2,
      title: 'AI & Machine Learning',
      description: 'Master AI/ML concepts with hands-on projects and real-world applications.',
      image: '/img5.png'
    },
    {
      id: 3,
      title: 'Data Science',
      description: 'Dive into data analysis, visualization, and machine learning techniques.',
      image: '/img6.png'
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Learn digital marketing strategies, SEO, and social media management.',
      image: '/img7.png'
    }
  ];

  const courseDetails = {
    1: {
      title: 'Website Development',
      overview: 'Master full-stack web development with modern technologies including React, Node.js, MongoDB, and deployment strategies. Work on real projects under the guidance of experienced developers.',
      whatYouLearn: [
        'React JS & Modern Frontend Development',
        'Node.js & Express Backend Development',
        'MongoDB & Database Management',
        'RESTful API Design & Implementation',
        'Version Control with Git & GitHub',
        'Deployment & DevOps Practices'
      ],
      duration: '3 Months',
      mode: 'Online / Hybrid',
      image: '/img4.png',
      benefits: [
        'Live Project Work',
        'Real Developer Mentorship',
        'Interview Preparation',
        'Soft Skills Improvement',
        'Practical & Hands-on Learning'
      ]
    },
    2: {
      title: 'AI & Machine Learning',
      overview: 'Dive deep into artificial intelligence and machine learning with practical projects, real datasets, and expert mentorship from industry professionals.',
      whatYouLearn: [
        'Python for Data Science & ML',
        'Machine Learning Algorithms & Models',
        'Deep Learning & Neural Networks',
        'Natural Language Processing',
        'Computer Vision Applications',
        'Model Deployment & Production'
      ],
      duration: '4 Months',
      mode: 'Online / Hybrid',
      image: '/img5.png',
      benefits: [
        'Live Project Work',
        'Real Developer Mentorship',
        'Interview Preparation',
        'Soft Skills Improvement',
        'Practical & Hands-on Learning'
      ]
    },
    3: {
      title: 'Data Science',
      overview: 'Comprehensive data science training covering data analysis, visualization, statistical modeling, and machine learning with real-world business applications.',
      whatYouLearn: [
        'Data Analysis with Python & R',
        'Statistical Modeling & Analysis',
        'Data Visualization Techniques',
        'SQL & Database Management',
        'Business Intelligence & Analytics',
        'Machine Learning Fundamentals'
      ],
      duration: '3.5 Months',
      mode: 'Online / Hybrid',
      image: '/img6.png',
      benefits: [
        'Live Project Work',
        'Real Developer Mentorship',
        'Interview Preparation',
        'Soft Skills Improvement',
        'Practical & Hands-on Learning'
      ]
    },
    4: {
      title: 'Digital Marketing',
      overview: 'Learn comprehensive digital marketing strategies including SEO, social media marketing, content marketing, and paid advertising with hands-on campaigns.',
      whatYouLearn: [
        'Search Engine Optimization (SEO)',
        'Social Media Marketing Strategy',
        'Content Marketing & Copywriting',
        'Paid Advertising (Google & Social Ads)',
        'Email Marketing & Automation',
        'Analytics & Performance Tracking'
      ],
      duration: '2.5 Months',
      mode: 'Online / Hybrid',
      image: '/img7.png',
      benefits: [
        'Live Project Work',
        'Real Developer Mentorship',
        'Interview Preparation',
        'Soft Skills Improvement',
        'Practical & Hands-on Learning'
      ]
    }
  };

  const handleShowMore = (course) => {
    setSelectedCourse(course);
  };

  const handleBack = () => {
    navigate('/internship');
  };

  const handleWhatsApp = () => {
    const phoneNumber = '9335699920';
    const message = encodeURIComponent('Hello AXN SOLUTION, I am interested in your internship programs.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="internship" className="section">
      <div className="section-title">
        <h2>Internship & Training Programs</h2>
        <p>At AXN SOLUTION, we provide industry-level training with real developers working on real-world projects.</p>
      </div>

      {!selectedCourse ? (
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button 
                  className="btn btn-secondary"
                  onClick={() => handleShowMore(course)}
                >
                  👉 Show more information
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="course-detail">
          <div className="course-detail-header">
            <button onClick={handleBack} className="back-link">
              ← Back to Courses
            </button>
          </div>
          
          <div className="course-detail-content">
            <div className="course-detail-grid">
              <div className="course-detail-image">
                <img src={courseDetails[selectedCourse.id].image} alt={courseDetails[selectedCourse.id].title} />
              </div>
              
              <div className="course-detail-info">
                <h2>{courseDetails[selectedCourse.id].title}</h2>
                
                <div className="course-overview">
                  <h3>Course Overview</h3>
                  <p>{courseDetails[selectedCourse.id].overview}</p>
                </div>

                <div className="course-learn">
                  <h3>What You Will Learn</h3>
                  <ul>
                    {courseDetails[selectedCourse.id].whatYouLearn.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="course-meta">
                  <div className="course-duration">
                    <h4>Course Duration</h4>
                    <p>{courseDetails[selectedCourse.id].duration}</p>
                  </div>
                  <div className="course-mode">
                    <h4>Mode</h4>
                    <p>{courseDetails[selectedCourse.id].mode}</p>
                  </div>
                </div>

                <div className="course-benefits">
                  <h3>Course Benefits</h3>
                  <div className="benefits-grid">
                    {courseDetails[selectedCourse.id].benefits.map((benefit, index) => (
                      <div key={index} className="benefit-item">
                        <span className="benefit-check">✔</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="course-actions">
                  <div className="action-buttons">
                    <button className="whatsapp-btn" onClick={handleWhatsApp}>
                      <span>💬</span>
                      Chat on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Internship;
