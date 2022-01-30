import React from 'react';
import SocialContact from '../../common/social-contact';
// import SocialContact from '../../common';
import './about.css';
function About() {
  return [ 
  <div className='about'>
    <div className='about-top'>
       <div className='about-info'>
         Hola , This is<br /><span className='info-name'>Tanvi</span>.<br />   Love to dive deep into ocean of Development. 
       </div>
       <div className='about-photo'>
         <img alt='' src ={require('../../../assets/photo.png')} className='picture'/>
       </div>
    </div>
     <SocialContact />
  </div>
  ];
}

export default About;
