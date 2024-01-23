import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../data/Projectdata.json';

function ProjectPage() {
    let { id } = useParams();
    const project = Data[id];


    return (
        <div>
            <h1>{project.name}</h1>
            <div className='project-information'>
                <div>{project.objectives}</div>
                <div>{project.description}</div>
                <div>{project.technicalDetails}</div>
            </div>
            <div className='project-image'>
                <img src={project.image} alt={project.name} />
            </div>
        </div>

    );
}

export default ProjectPage;
