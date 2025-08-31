import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="text-gradient">Full-Stack Developer</span>
          </h1>
          <h2 className="hero-subtitle">Building Digital Experiences</h2>
          <p className="hero-description">
            Passionate about creating scalable web applications with modern technologies. 
            I transform ideas into powerful, user-friendly digital solutions.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="floating-card">
            <div className="card-content">
              <div className="code-lines">
                <div className="line">const developer = &lbrace;</div>
                <div className="line">  name: 'Your Name',</div>
                <div className="line">  skills: ['React', 'Node.js'],</div>
                <div className="line">  passion: 'Building amazing apps'</div>
                <div className="line">&rbrace;;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;