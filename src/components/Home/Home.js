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
        <div className='headline'>Product Driven Developer</div>
        <div className='sub-headline'><p>I have many skills but I have one goal.</p>Build build things that provide value.</div>


      </div>
      <div className='download-buttons-container'>
      <a href={`${process.env.PUBLIC_URL}/CV/Oscar_CV_French.pdf`} download="Oscar_CV.pdf" className='download-cv'>
      Télécharger le CV <img src={frenchIcon} alt="French Flag" className='flag-icon'/>
        </a>
        <a href={`${process.env.PUBLIC_URL}/CV/Oscar_CV_English.pdf`} download="Oscar_CV.pdf" className='download-cv'>
        Download CV <img src={englishIcon} alt="British Flag" className='flag-icon'/>
        </a>
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
