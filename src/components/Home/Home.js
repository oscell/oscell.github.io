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
        <div className='headline'>This is my headline</div>
        <div className='sub-headline'>But this is my sub-headline. What do you think about it? But this is my sub-headline. What do you think about it? But this is my sub-headline. What do you think about it? But this is my sub-headline. What do you think about it? </div>
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
