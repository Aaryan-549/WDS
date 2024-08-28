import React from 'react';
import formback from '../assets/formback.png';
import QueryForm from './QueryForm';
import point from '../assets/point.png';
import mail from '../assets/mail.png';
import insta from '../assets/insta.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

function Form() {
  return (
    <div className='relative min-h-full w-full bg-stone-950 z-[-1]'>
      <img src={formback} alt='form' className='absolute bottom-0 left-0 w-full h-1/2 object-cover' />
      
      <div style={{ transform: 'translateX(20rem)'}}>
        <QueryForm className='m-0 bottom-0' />
      </div>
      
      <img style={{ transform: 'translateX(-85rem) translateY(-10rem)'}} src={mail} alt='mail' className='absolute bottom-0 right-0 w-10 h-10 object-cover' />
      <img style={{ transform: 'translateX(-80rem) translateY(-15rem)'}} src={point} alt='point' className='absolute bottom-0 right-20 w-10 h-10 object-cover' />
      
      <div style={{ transform: 'translateX(12rem) translateY(-13.2rem)'}} className='font-poppins text-white text-m z-4'>
        <p>Bhadson Rd, Adarsh Nagar, Prem Nagar, </p>
        <p>Patiala, Punjab 147004</p>
      </div>
      
      <div style={{ transform: 'translateX(12rem) translateY(-10.65rem)'}} className='font-poppins text-white text-m z-4'>
        <p>mars@thapar.edu</p>
      </div>
      
      <div style={{ transform: 'translateX(-65rem) translateY(-5rem)'}} className='z-3'>
        {/* Social Media Links */}
        <a href="https://www.instagram.com/mars_tiet/" target="_blank" rel="noopener noreferrer">
          <img 
            src={insta} 
            alt='Instagram' 
            className='absolute bottom-0 right-40 w-10 h-10 object-cover transition-transform duration-300 hover:scale-110 hover:brightness-125' 
          />
        </a>
        
        <a href="https://github.com/mars-tu" target="_blank" rel="noopener noreferrer">
          <img 
            src={github} 
            alt='GitHub' 
            className='absolute bottom-0 right-60 w-10 h-10 object-cover transition-transform duration-300 hover:scale-110 hover:brightness-125' 
          />
        </a>
        
        <a href="https://www.linkedin.com/company/mechatronics-and-robotics-society-tiet" target="_blank" rel="noopener noreferrer">
          <img 
            src={linkedin} 
            alt='LinkedIn' 
            className='absolute bottom-0 right-80 w-10 h-10 object-cover transition-transform duration-300 hover:scale-110 hover:brightness-125' 
          />
        </a>
      </div>
    </div>
  );
};

export default Form;
