import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import Data from '../../data/Projectdata.json';
import '../CommonStyles.css';

function Projects() {
  return (
    <div className='component__container'>
      <div className='projects__container'>
        <h2>My Projects</h2>
        <div className="categories__container">
          {/* <div className='projects__heading'>My Projects</div>
          <div className='project__categories'>
            <div className='project_category'>AI</div>
            <div className='project_category'>Web Dev</div>
            <div className='project_category'>Simulation</div>
            <div className='project_category'>Computer Vision</div>
            <div className='project_category'>Robotics</div>
          </div> */}
        </div>
        <div className='projects'>
          {Data.map((project, index) => (
            <Link to={`/projects/${index}`} key={index} className='project_item' style={{ backgroundImage: `url(${project.project_thumbnail})` }}>
              <div className='project__title'>{project.title}</div>
              <div className='project__description'>{project.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
