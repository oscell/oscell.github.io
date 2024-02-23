import React from 'react';
import './Home.css';
import HeadlinePic from '../../assets/HeadlineImage.png'; // Importing the image
import '../CommonStyles.css';
import frenchIcon from '../../assets/icons/icons8-france-circulaire-48.png';
import englishIcon from '../../assets/icons/icons8-grande-bretagne-circulaire-48.png';


function Home() {
  return (

    <div className='component__container'>
      <div className='home__container'>
        <div className='left__container'>
          <div className="home__headline">
            <div className='headline'>Solution Driven Developer</div>
            <div className='sub-headline'>I love developing automation.</div>


          </div>
          <div className='download-buttons-container'>
            <a href={`${process.env.PUBLIC_URL}/CV/Oscar_CV_French.pdf`} download="Oscar_CV_Français.pdf" className='download-cv'>
              Télécharger le CV <img src={frenchIcon} alt="French Flag" className='flag-icon' />
            </a>
            <a href={`${process.env.PUBLIC_URL}/CV/Oscar_CV_English.pdf`} download="Oscar_CV_English.pdf" className='download-cv'>
              Download CV <img src={englishIcon} alt="British Flag" className='flag-icon' />
            </a>
          </div>

          <div className='education__container'>
            <div className='education__title'>Education</div>
            <div className='education__content'>
              <div className='education__content-item'>
                <div className='education__content-title'>Master's of Robotics and AI</div>
                <div className='education__content-subtitle'>University of Glasgow, UK</div>
              </div>
              <div className='education__content-item'>
                <div className='education__content-title'>Bachelor's of Mechanical Engineering with Aeronautics</div>
                <div className='education__content-subtitle'>University of Glasgow, UK</div>
              </div>
            </div>
            </div>
            

        </div>
        <div className="home__image-container">
          <img className="home__image" src={HeadlinePic} alt="Your Portrait" />
        </div>
      </div>
    </div>
  );
}

export default Home;
