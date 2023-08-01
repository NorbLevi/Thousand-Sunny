import React, { useState } from 'react';

import { ImMenu3 } from 'react-icons/im'
import { MdRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'

import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, settoogleMenu] = useState(false);
  return(
  <nav className='app__navbar'>
   <div className="app__navbar-logo">
    <img src={images.gericht} alt='app-logo'/>
   </div>
   <ul className='app__navbar-links'>
    <li className="p__opensans"><a href="#home">home</a></li>
    <li className="p__opensans"><a href="#about">About</a></li>
    <li className="p__opensans"><a href="#menu">Menu</a></li>
    <li className="p__opensans"><a href="#awards">Awards</a></li>
    <li className="p__opensans"><a href="#contact">Contact</a></li>
   </ul>
    <div className="app__navbar-login">
      <a href="#login" className='p__opensans'> Log In/Register</a>
      <div />
      <a href="/" className="p__opensans">Book a Table</a>
    </div>

    <div className="app__navbar-smallscreen">
      <ImMenu3 color="fff" className='nav_icon' onClick={() =>settoogleMenu(true)}/>

    { toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdRestaurantMenu fontsize={27} className='overlay__close nav_icon' onClick={() => settoogleMenu(false)}/>
        <ul className='app__navbar-smallscreen-links'>
          <li className="p__opensans"><a href="#home" onClick={() => settoogleMenu(false)}>home</a></li>
          <li className="p__opensans"><a href="#about"onClick={() => settoogleMenu(false)}>About</a></li>
          <li className="p__opensans"><a href="#menu" onClick={() => settoogleMenu(false)}>Menu</a></li>
          <li className="p__opensans"><a href="#awards" onClick={() => settoogleMenu(false)}>Awards</a></li>
          <li className="p__opensans"><a href="#contact" onClick={() => settoogleMenu(false)}>Contact</a></li>
      </ul>
      </div>
    )}

      
    </div>
  </nav>
  )
}

export default Navbar;
