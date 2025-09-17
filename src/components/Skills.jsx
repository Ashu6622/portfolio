import React, { useEffect, useRef, useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const skillsRef = useRef(null);
  
  const skills = [
    {name: 'C++', icon: '💻'},
     { name: 'DSA', icon: '🧮' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Vite', icon: '⚡' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Node.js', icon: '💚' },
    { name: 'Express', icon: '🚀' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Firebase', icon: '🔥' },
    { name: 'Prisma', icon: '🔷' },
    { name: 'SQL', icon: '📊' },
   
    { name: 'Redis', icon: '📦' },
    { name: 'Redux', icon: '🔄' },
    { name: 'Shadcn UI', icon: '🎯' },
  
    { name: 'GitHub', icon: '🐙' },
    { name: 'Git', icon: '📝' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skills one by one
            skills.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSkills(prev => [...prev, index]);
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies I work with to bring ideas to life
          </p>
        </div>
        
        <div className="skills-grid" ref={skillsRef}>
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className={`skill-card ${visibleSkills.includes(index) ? 'visible' : ''}`}
            >
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;