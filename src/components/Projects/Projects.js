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
        <div className='projects'>
          {Data.map((project, index) => (
            <Link to={`/${index}`} key={index} className='project_item' style={{ backgroundImage: `url(${project.project_thumbnail})` }}>
              <div className='project__title'>{project.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
