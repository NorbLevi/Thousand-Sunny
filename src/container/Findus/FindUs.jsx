import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Contact"/>
      <h1 className="headtext__cormorant" style={{marginBottom:'3rem'}}>Find Us</h1>
      <div className="app__wrappre-content">
        <p className="p__opensans">East Blue</p>
        <p className="p__cormonrat" style={{color: '#dcca87', margin: '2rem 0'}}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 7:00am - 2:00am</p>
        <p className="p__opensans">Sat - Sun: 10:00am - 2:00am</p>
      </div>
      <button type='button' className='custom__button' style={{marginTop: '2rem'}}>Visit us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
