import React from 'react';
import BrainflixLogo from '../../Assets/Logo/BrainFlix-logo.svg'
import "./Header.scss";
import Avatar from '../../Assets/Images/Mohan-muruge.jpg'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='nav'>
      <img src={BrainflixLogo} alt="Brainflix Logo" className="nav__logo" />
      <div className="nav__container">
        <div className='nav__container-search'>
          <input type="search" className="nav__container-search-input" placeholder='Search'>
          </input>
        </div>
          <Link to="/upload" className="nav__container-upload"><button className="nav__container-upload button"> UPLOAD</button></Link>
        <div className="nav__container-avatar">
          <img className="nav__container-avatar" src={Avatar}  alt="avatar" />
        </div>
      </div>
    </header>
  )
}

export default Header