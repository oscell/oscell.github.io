import React from 'react';
import './Projects.css';
import Image from '../../assets/image.jpg'

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
        <div className='project_item' style={{ backgroundImage: `url(${Image})` }}>
          <div className='project__title'>
            Projects 1
          </div>
          <div className='project__description'>
            Description for Project 1
          </div>
        </div>
        <div className='project_item'>
          <div className='project__title'>
            Projects 2
          </div>
          <div className='project__description'>
            Description for Project 2
          </div>
        </div>
        <div className='project_item'>
          <div className='project__title'>
            Projects 3
          </div>
          <div className='project__description'>
            Description for Project 3
          </div>
        </div>
        <div className='project_item'>
          <div className='project__title'>
            Projects 3
          </div>
          <div className='project__description'>
            Description for Project 3
          </div>
        </div>
        <div className='project_item'>
          <div className='project__title'>
            Projects 3
          </div>
          <div className='project__description'>
            Description for Project 3
          </div>
        </div>
        <div className='project_item'>
          <div className='project__title'>
            Projects 3
          </div>
          <div className='project__description'>
            Description for Project 3
          </div>
        </div>
                <div className='project_item'>
          <div className='project__title'>
            Projects 3
          </div>
          <div className='project__description'>
            Description for Project 3
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
