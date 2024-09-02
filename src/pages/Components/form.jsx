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
    <div className='overflow-hidden relative min-h-auto w-full bg-stone-950 z-[-1]'>
      <img src={formback} alt='form' className='absolute bottom-0 left-0 w-full h-1/2 md:object-cover sm:object-contain' />
      <div className='md:relative sm:absolute sm:flex md:translate-x-96 sm:object-cover sm:z-10'>
      <div style={{ transform: 'translateX(30rem)'}}>
        <QueryForm className='m-0 bottom-0' />
      </div>
      </div>
      <div className='translate-x-32'>
      <div className=' '>
      <img src={mail} alt='mail' className='absolute -translate-y-52 w-10 h-10 object-cover' />
      <img src={point} alt='point' className='absolute -translate-y-40 w-10 h-10 object-cover' />
      </div>
      <div className='md:-translate-y-1'>
      <div className='font-poppins md:translate-x-16 md:-translate-y-52 text-white text-m z-4'>
        <p>Bhadson Rd, Adarsh Nagar, Prem Nagar, </p>
        <p>Patiala, Punjab 147004</p>
      </div>
      
      <div className='font-poppins md:translate-x-16 md:-translate-y-48 top-10 text-white text-m z-4'>
        <p>mars@thapar.edu</p>
      </div>
      </div>
      </div>
      <div style={{ transform: 'translateX(-65rem) translateY(-5rem)'}} className='z-3'>
        {/* Social Media Links */}
        <a href="https://www.instagram.com/mars_tiet/" target="_blank" rel="noopener noreferrer">
          <img 
            src={insta} 
            alt='Instagram' 
            className='w-10 h-10 object-cover transition-transform duration-300 hover:scale-110 hover:brightness-125' 
          />
        </a>
        <a href="https://github.com/mars-tu" target="_blank" rel="noopener noreferrer">
          <img 
            src={github} 
            alt='GitHub' 
            className='w-10 h-10 object-cover transition-transform duration-300 hover:scale-110 hover:brightness-125' 
          />
        </a>
        <a href="https://www.linkedin.com/company/mechatronics-and-robotics-society-tiet" target="_blank" rel="noopener noreferrer">
          <img 
            src={linkedin} 
            alt='LinkedIn' 
            className='w-10 h-10 object-cover transition-transform duration-300 hover:scale-110 hover:brightness-125' 
          />
        </a>
      </div>
    </div>
  );
}

export default Form;
