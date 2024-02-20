import React from 'react';
import './Bio.css';
import '../CommonStyles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';





function Bio() {
  return (
    <div className='component__container'>



      <div id="contact__container">
        <div className='contact__details'>
        <p>
          <div>
            <a href="mailto:oscar.meunierpbs@gmail.com"> oscar.meunierpbs@gmail.com <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </p>
        <p>
          <div>
           +33 618831149 | +44 7823791575 <FontAwesomeIcon icon={faPhone} />
          </div>
        </p>
        <p>
          <div>
           75012, Paris, France <FontAwesomeIcon icon={faLocationDot} />
          </div>
        </p>
      </div>
      


      <div className="socials">

        <div className="socials__container">
          <a href="https://www.linkedin.com/in/oscar-meunier-003655181/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: '#2966b2' }}/>
          </a>
          <a href='https://github.com/oscell' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub}/>
          </a>

          </div>
          </div>

      </div>
    </div>
  );
}

export default Bio;

