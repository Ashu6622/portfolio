import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const placeholderProjects = [
    {
      id: 1,
      title: 'Project One',
      description: 'Description of your amazing project will go here. Explain the technologies used and key features.',
      github: '#',
      live: '#',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Description of your amazing project will go here. Explain the technologies used and key features.',
      github: '#',
      live: '#',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Description of your amazing project will go here. Explain the technologies used and key features.',
      github: '#',
      live: '#',
      image: 'https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and contributions
          </p>
        </div>
        
        <div className="projects-grid">
          {placeholderProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link github-link" target="_blank" rel="noopener noreferrer">
                      <span>GitHub</span>
                    </a>
                    <a href={project.live} className="project-link live-link" target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;