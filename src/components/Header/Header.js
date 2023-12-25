import React from 'react';
import './Header.css';
import profilePic from '../../assets/image.jpg'; // Importing the image

function Header() {
  return (
    <div className='header__container'>
    <div className="Header">
      <img src={profilePic} alt="Profile" className="ProfilePicture" />
      <button className="ContactButton">
        Contact Me
      </button>
    </div>
    </div>
  );
}

export default Header;
