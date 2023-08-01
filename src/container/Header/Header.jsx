import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
<div className="app__header app__wrapper section__padding" id='home'>
  <div className="app__wrapper_info">
  <SubHeading title='Explore the Vast sea of flavour'/>
  <h1 className='app__header-h1'>The All blue flavour</h1>
  <p className="p__opensans" style={{margin: '2rem 0'}}>
    welcome to our hotel be free to 
    share and contribute to our evolution as members of our family we welcome
    you to our humble home
  </p>
  <button type='button' className='custom__button'>Explore Menu</button>
  </div>

  <div className="app__wrapper-img ">
    <img src={images.welcome} alt="header img" />
  </div>
</div>
);

export default Header;
