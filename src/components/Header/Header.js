import React from 'react';
import './Header.css';
import profilePic from '../../assets/image.jpg'; // Importing the image
import { Link } from 'react-router-dom';
import '../CommonStyles.css'; 

function Header() {
  return (
    <div className='component__container'>
    <div className='header__container'>
    <div className="Header">
      <Link to="/" >
      <img src={profilePic} alt="Profile" className="ProfilePicture"  />
      </Link>
      <button className="ContactButton">
        Contact Me
      </button>
    </div>
    </div>
    </div>
  );
}

export default Header;
