import React from 'react';
import Seperator from '../../common/seperator';
import SocialContact from '../../common/social-contact';
import './contact.css';
function Contact() {
  return (
  <div className='contact'>
    <Seperator />
    <label className='section-title'>Contact</label>
    <div className='contact-container'>
      <div className='contact-left'>
        <p>Get in touch.Contact Info</p>
       <SocialContact />
      </div>
      <div className='download'>
         {/* <a download href={require('../../../assets/resume.pdf').default}>
           
           Download resume 
            </a> */}
    </div>

   
   
    </div>
    
    
    </div>
  );
}

export default Contact;
