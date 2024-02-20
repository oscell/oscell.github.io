import React from 'react';
import './Header.css';
import profilePic from '../../assets/image.jpg'; // Importing the image
import { Link } from 'react-router-dom';
import '../CommonStyles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';




function Header() {
  return (
    <div className='component__container'>
      <div className='header__container'>
        <div className="Header">
          <Link to="/" >
            <img src={profilePic} alt="Profile" className="ProfilePicture" />
          </Link>

          <div className="contact-details">
            <div className='email-and-phone'>
              
            <div className='contact'>
              <a href="mailto:oscar.meunierpbs@gmail.com"> oscar.meunierpbs@gmail.com <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            <div className='contact'>
              +33 618831149 | +44 7823791575 <FontAwesomeIcon icon={faPhone} />
            </div>
            </div>
            <div className='header-socials'>
              <a href="https://www.linkedin.com/in/oscar-meunier-003655181/" target="_blank" rel="noreferrer" className='header-social'>
                <FontAwesomeIcon icon={faLinkedin} style={{ color: '#2966b2' }} />
              </a>
              <a href='https://github.com/oscell' target='_blank' rel='noreferrer' className='header-social'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
          
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;
