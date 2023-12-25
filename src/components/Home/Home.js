import React from 'react';
import './Home.css';
import HeadlinePic from '../../assets/HeadlineImage.png'; // Importing the image

function Home() {
  return (
    <div className='home__container'>
      <div className="home__headline">
        <h1>This is my headline</h1>
        <h2>But this is my sub-headline. What do you think about it?</h2>
      </div>
      <div className="home__image-container">
        <img className="home__image" src={HeadlinePic} alt="Your Portrait" />
      </div>
    </div>
  );
}

export default Home;
