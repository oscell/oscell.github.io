import React from 'react';
import './Header.css';
import profilePic from '../../assets/image.jpg'; // Importing the image

function Header() {
  return (
    <header className="Header">
      <img src={profilePic} alt="Profile" className="ProfilePicture" />
      <button className="ContactButton">
        Contact Me
      </button>
    </header>
  );
}

export default Header;
