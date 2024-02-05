import React from 'react';
import BrainflixLogo from '../../Assets/Logo/BrainFlix-logo.svg'
import "./Header.scss";
import Avatar from '../../Assets/Images/Mohan-muruge.jpg'
import arrow from '../../Assets/Icons/upload.svg'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='nav'>
      <Link to="/videos/84e96018-4022-434e-80bf-000ce4cd12b8"className="nav__logo"><img src={BrainflixLogo} alt="Brainflix Logo" /></Link>
      <div className="nav__container">
        <div className='nav__container-search'>
          <input type="search" className="nav__container-search-input" placeholder='Search'>
          </input>
          <img className="nav__container-avatar--m" src={Avatar}  alt="avatar" />
        </div>
          <Link to="/upload" className="nav__container-upload"><button className="nav__container-upload button"> <img src={arrow} width="20px"/> UPLOAD</button></Link>
        <div className="nav__container-avatar">
          <img className="nav__container-avatar" src={Avatar}  alt="avatar" />
        </div>
      </div>
    </header>
  )
}

export default Header