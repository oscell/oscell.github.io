import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../data/Projectdata.json';
import './ProjectPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import ReactMarkdown from 'react-markdown';



function ProjectPage() {
    let { id } = useParams();
    const project = Data[id];


    return (
        <div className='project__wrapper'>
            <h1>{project.title}</h1>
            <div className='project-assets_container'>
                <div className='project-information'>

                    <h2>Objectives</h2>
                    <ReactMarkdown>{project.objectives}</ReactMarkdown>

                    <h2>Outcomes</h2>
                    <ReactMarkdown>{project.outcomes}</ReactMarkdown>


                    <ReactMarkdown>{project.technicalDetails}</ReactMarkdown>
                </div>
                <div className='project-image'>
                    <img src={project.image} alt={project.name} />
                </div>
            </div>
            <h2>Links</h2>
            <div className='project-links'>

                {project.links.github && (
                    <p>

                        <a href={project.links.github} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} />  Github</a>
                    </p>
                )}
                {project.links.liveDemo && (
                    <p><a href={project.links.liveDemo} target='_blank' rel='noreferrer'>Live Demo</a></p>
                )}
                {project.links.youtube && (

                    <p>

                        <a href={project.links.youtube} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faYoutube} style={{ color: 'red' }} /> Youtube</a>
                    </p>
                )}
                {project.links.website && (
                    <p><a href={project.links.website} target='_blank' rel='noreferrer'>Website</a></p>
                )}
            </div>
        </div>

    );
}

export default ProjectPage;
