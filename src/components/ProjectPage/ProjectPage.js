import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Data from '../../data/Projectdata.json';
import './ProjectPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';


function ProjectPage() {
    let { id } = useParams();
    const project = Data[id];



    return (
        <div className='project__container'>
            <div className='project__wrapper'>
                <h1>{project.title}</h1>
                <div className='project-assets_container'>
                    <div className='project-information'>

                        <h2>Objectives</h2>
                        <ReactMarkdown>{project.objectives}</ReactMarkdown>

                        <h2>Outcomes</h2>
                        <ReactMarkdown>{project.outcomes}</ReactMarkdown>

                        <h2>Technical Details</h2>
                        <ReactMarkdown>{project.technicalDetails}</ReactMarkdown>


                        <h2> Skills Used</h2>
                        <p>{project.Skills.join(', ')}</p>



                    </div>

                    <div className='project-image'>
                        <img src={project.project_image} alt={project.name} />

                        <div class='project-links-container'>


                            <div className='project-links'>

                                {project.links.github && (
                                    <p>

                                        <a href={project.links.github} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} />  Github</a>
                                    </p>
                                )}
                                {project.links.liveDemo && (
                                    <p><a href={project.links.liveDemo} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faDesktop} /> Live Demo</a></p>
                                )}
                                {project.links.youtube && (

                                    <p>

                                        <a href={project.links.youtube} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faYoutube} style={{ color: 'red' }} /> Video</a>
                                    </p>
                                )}
                                {project.links.website && (
                                    <p><a href={project.links.website} target='_blank' rel='noreferrer'>Website</a></p>
                                )}
                                {project.links.instagram && (
                                    <p><a href={project.links.instagram} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faSquareInstagram} style={{ color: '#ee4963' }} /> Instagram</a></p>
                                )}
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className='project__footer'>
                <div className='project__footer-content'>

                    <Link to='/' className='back-button'>Back to Main Page</Link>
                </div>
            </div>
        </div>

    );
}

export default ProjectPage;
