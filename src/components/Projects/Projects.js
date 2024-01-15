import React from 'react';
import './Projects.css';
import Image from '../../assets/image.jpg';


// Example project data
const projectsData = [
  {
    name: 'Project 1',
    description: 'Description for Project 1',
    image: Image,
    url: 'https://github.com/oscell/SymbioticRobots'
  },
  {
    name: 'Project 2',
    description: 'Description for Project 2',
    image: Image,
    url: 'https://github.com/oscell/SymbioticRobots'

  },
];

function Projects() {
  return (
    <div className='projects__container'>
      <div className="categories__container">
        <div className='projects__heading'>My Projects</div>
        <div className='project__categories'>
          <div className='project_category'>AI</div>
          <div className='project_category'>Web Dev</div>
          <div className='project_category'>Simulation</div>
          <div className='project_category'>Computer Vision</div>
          <div className='project_category'>Robotics</div>
        </div>
      </div>
      <div className='projects'>
        {projectsData.map((project, index) => (
          <a href={project.url}
            key={index}
            className='project_item' 
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className='project__title'>{project.name}</div>
            <div className='project__description'>{project.description}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
