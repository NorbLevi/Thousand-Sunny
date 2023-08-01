import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';

import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>
    
      <div className="footer__container">
        <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact us</h1>
          <p className="p__opensans">East Blue</p>
          <p className="p__opensans">+1011 000 0001</p>
          <p className="p__opensans">+1011 111 1212</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="logo" />
          <p className="p__opensans">The best way to find yourself is in A fine Meal</p>
          <img src={images.spoon} alt="spoon"  className='spoon__img' style={{marginTop: 15}}/>
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter/>
            <FiInstagram/>
          </div>
        </div>
        <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday - Friday</p>
          <p className="p__opensans">7:00am - 2:00am</p>
          <p className="p__opensans">Saturday - Sunday</p>
          <p className="p__opensans">10:00am - 2:00am</p>
        </div>
        </div>

        <div className="footer__copyright">
        <p className="p__opensans">2023 Thousand Sunny. All Rights reserved.</p>
        </div>
      </div>

  </div>
);

export default Footer;
