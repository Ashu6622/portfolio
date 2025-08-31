import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
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
    { name: 'Prisma', icon: '🔷' },
    { name: 'SQL', icon: '📊' },
    { name: 'DSA', icon: '🧮' },
    { name: 'Redis', icon: '📦' },
    { name: 'Redux', icon: '🔄' },
    { name: 'Shadcn UI', icon: '🎯' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Git', icon: '📝' }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies I work with to bring ideas to life
          </p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
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