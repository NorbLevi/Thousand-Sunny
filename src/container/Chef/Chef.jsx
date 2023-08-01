import React from 'react';


import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chefs Word"/>
      <h1 className="headtext__cormorant">What we belive in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content-quote">
          <img src={images.quote} alt="Quote" />
          <p className="p__opensans">
            Food is a language uesd to convey diffrent emotions
          </p>
        </div>
        <p className="p__opensans">
          Explore diffrent meals and flavours with us and enjoy the fine wine we have to share with you
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Vinsmoke Sanji</p>
        <p className='p__opensans'>Chef of The StrawHats</p>
        <img src={images.sign} alt="Sign" />
      </div>

    </div>
  </div>
);

export default Chef;
