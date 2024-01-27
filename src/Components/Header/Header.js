import React from 'react';
import BrainflixLogo from '../../Assets/Logo/BrainFlix-logo.svg'
import SearchIcon from '../../Assets/Icons/search.svg'
import UploadIcon from '../../Assets/Icons/upload.svg'
import "./Header.scss";
import Avatar from '../../Assets/Images/Mohan-muruge.jpg'

function Header() {
  return (
    <header className='header'>
      <img src={BrainflixLogo} alt="Brainflix Logo" className="header__logo" />
      <div className="nav">
        <div className='nav__search'>
          <input className="nav__input" placeholder='Search'>

          </input>
          <img className="nav__search-icon" src={SearchIcon} alt="search icon" />

        </div>
        <a className='nav__button' href="#">
          <img src={UploadIcon} alt="upload" />
          Upload
          <img className="upload" src={UploadIcon} alt="upload" />
        </a>
        <div className="nav__avatar">
        {/* <img className="avatar" src={Avatar} alt="avatar" /> */}

        </div>
      </div>
    </header>
  )
}

export default Header