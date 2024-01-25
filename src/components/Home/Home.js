import React from 'react';
import './Home.css';
import HeadlinePic from '../../assets/HeadlineImage.png'; // Importing the image
import '../CommonStyles.css';


function Home() {
  return (

    <div className='component__container'>
    <div className='home__container'>
      <div className='left__container'>
      <div className="home__headline">
        <div className='headline'>Product Driven Developer</div>
        <div className='sub-headline'><p>I have many skills but I have one goal.</p>Build build things that provide value.</div>


      </div>
      <a href={`${process.env.PUBLIC_URL}/CV/CV_Oscar.pdf`} download="Oscar_CV.pdf" className='download-cv'>
        Download CV
        </a>

      </div>
      <div className="home__image-container">
        <img className="home__image" src={HeadlinePic} alt="Your Portrait" />
      </div>
    </div>
    </div>
  );
}

export default Home;
