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

      {/* <div className="Bio">
      <h2>About Me</h2>
      <p>
        <div>

          Did you know Tesla's marekting budget is $0? Yet they are one of the most well known brands in the world. I'm on a mission to undertand what it takes to be a product first company, delivering value to customers.
          
          <br></br>
          I'm a developer with an entrepreneurial spirit and a passion for automation through software.


        </div>


      </p>
    </div> */}

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
