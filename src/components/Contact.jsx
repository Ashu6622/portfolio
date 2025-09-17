import React, { useEffect, useRef, useState } from 'react';
import { SiLeetcode, SiLinkedin, SiGithub } from 'react-icons/si';
import '../styles/Contact.css';

const Contact = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const contactRef = useRef(null);
  
  const handleResumeDownload = () => {
    const a = document.createElement('a');
    a.href = 'https://drive.google.com/uc?export=download&id=1ldMSm48QbMWLzbCrjV9BOMrZ--aA2OaY';
    a.download = 'Ashutosh_Roy_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards one by one
            setTimeout(() => setVisibleCards(prev => [...prev, 0]), 200);
            setTimeout(() => setVisibleCards(prev => [...prev, 1]), 600);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Ready to collaborate? Let's build something amazing together
          </p>
        </div>
        
        <div className="contact-content" ref={contactRef}>
          <div className="contact-info">
            <div className={`contact-card ${visibleCards.includes(0) ? 'visible' : ''}`}>
              <h3>Get In Touch</h3>
              <div className="contact-links">
                <a href="mailto:royashutosh004@gmail.com" className="contact-link">
                  <span className="contact-icon">📧</span>
                  <span>royashutosh004@gmail.com</span>
                </a>
                <a href="tel:+ 9712037499" className="contact-link">
                  <span className="contact-icon">📱</span>
                  <span>91+ 9712037499</span>
                </a>
                <a href="https://leetcode.com/u/rashu2879/" className="contact-link" target="_blank" rel="noopener noreferrer">
                  <span className="contact-icon"><SiLeetcode /></span>
                  <span>LeetCode</span>
                </a>
                <a href="https://www.linkedin.com/in/ashutosh-roy-6ba156244/" className="contact-link" target="_blank" rel="noopener noreferrer">
                  <span className="contact-icon"><SiLinkedin /></span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Ashu6622" className="contact-link" target="_blank" rel="noopener noreferrer">
                  <span className="contact-icon"><SiGithub /></span>
                  <span>GitHub</span>
                </a>
              
              </div>
            </div>
          </div>
          
          <div className="resume-section">
            <div className={`resume-card ${visibleCards.includes(1) ? 'visible' : ''}`}>
              <h3>Download Resume</h3>
              <p>Get a copy of my detailed resume with all my experience and qualifications.</p>
              <button className="resume-btn" onClick={handleResumeDownload}>
                <span className="btn-icon">📄</span>
                Download Resume
              </button>
              <a href="https://drive.google.com/file/d/1ldMSm48QbMWLzbCrjV9BOMrZ--aA2OaY/view?usp=sharing" className="resume-btn view-resume-btn" target="_blank" rel="noopener noreferrer">
                <span className="btn-icon">👁️</span>
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;