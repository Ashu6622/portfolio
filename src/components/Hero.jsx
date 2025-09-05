import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="animated-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="geometric-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="particles">
          {[...Array(80)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="text-gradient">Ashutosh Roy</span>
          </h1>
          <h2 className="hero-name">
            <span className="text-gradient">Full-Stack Developer</span>
          </h2>
          <h2 className="hero-subtitle">Building Digital Experiences</h2>
          <p className="hero-description">
             Aspiring Software Developer with strong expertise in Full Stack Development, REST API design, and Data Structures &
 Algorithms (1000+ problems solved). Proficient in React.js, Node.js, Express.js, MongoDB, SQL, and Firebase, with
 proven experience building scalable, secure, and user-friendly applications. Passionate about problem-solving,
 optimizing performance, and delivering high-quality solutions. 
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
                <div className="line">  name: Ashutosh Roy</div>
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