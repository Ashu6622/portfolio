import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Projects.css';

const Projects = () => {
  const placeholderProjects = [
    {
      id: 1,
      title: 'College Hunt',
      description: 'A full-stack college information platform with secure Firebase authentication, real-time database, and collaborative comment management. Built with React.js and Tailwind CSS, featuring a responsive UI and deployed on Vercel.',
      github: 'https://github.com/Ashu6622/collegehunt',
      live: 'https://collegehunt.vercel.app/',
      image: 'image_1.jpg'
    },
    {
      id: 2,
      title: 'E-Commerce API Development',
      description: 'Developed a scalable backend API with Node.js and Express.js featuring JWT authentication, RBAC, and advanced product search with filtering and ordering. Optimized performance by 70% using Redis caching, rate limiting, and PM2 clustering.',
      github: 'https://github.com/Ashu6622/E-Commerce-API-Design',
      // live: '#',
      image: 'image_2.png'
    },
    {
      id: 3,
      title: 'Cloud File System',
      description: 'Built a cloud-based file management system with React and Node.js, enabling secure authentication and storage using MongoDB. Provides users with seamless file upload, access, and management through a responsive interface.',
      github: 'https://github.com/Ashu6622/imageUploader_frontend',
      live: 'https://cloudeimage.netlify.app/login',
      image: 'image_3.jpg'
    },
    {
      id: 4,
      title: 'Task Assignment',
      description: 'Developed a task assignment application with React and MongoDB, integrating Firebase Authentication for secure sign-in with Google. Allows users to create, assign, and manage tasks efficiently with a responsive interface.',
      github: 'https://github.com/Ashu6622/Highway_frontend',
      live: 'https://highwaydel.netlify.app/login',
      image: 'image_4.webp'
    },
    {
      id: 5,
      title: 'RBAC with Nextjs',
      description: 'Implemented Role-Based Access Control (RBAC) in a Next.js application with MongoDB, enabling secure authentication and authorization for users and admins. Ensured protected routes and role-specific access for efficient user management.',
      github: 'https://github.com/Ashu6622/Nextjs_Admin_User_Panel',
      // live: '#',
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
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="projects-carousel"
        >
          {placeholderProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="project-card">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;