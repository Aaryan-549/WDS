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
    <div className='overflow-hidden relative min-h-auto w-full bg-stone-950'>
      <img
        src={formback}
        alt='form'
        className='absolute bottom-0 left-0 w-full h-1/2 object-cover md:object-cover'
      />
      <div className='relative flex justify-center md:translate-x-96 sm:z-10'>
        <div className='md:-translate-x-8'>
          <QueryForm className='m-0 bottom-0' />
        </div>
      </div>

      <div className=' translate-x-8 md:translate-x-32 sm:translate-x-20'>
        <div>
          <img
            src={mail}
            alt='mail'
            className='sm:-translate-y-28 md:absolute md:-translate-y-24 w-8 h-8 md:w-10 md:h-10'
          />
          <img
            src={point}
            alt='point'
            className='md:absolute sm:translate-y-20 md:-translate-y-10 w-8 h-8 md:w-10 md:h-10'
          />
        </div>
        <div className='relative sm:translate-x-40 md:translate-x-0'>
        <div className=' md:translate-y-11 sm:translate-x-20 md:translate-x-0'>
          <div className='font-poppins text-white text-sm sm:translate-y-60 md:text-base md:translate-x-16  md:-translate-y-24'>
            <p className='object-contain translate-y-0 '>Bhadson Rd, Adarsh Nagar, </p>
            <p>Prem Nagar, Patiala, </p>
            <p>Punjab 147004</p>
          </div>

          <div className=' font-poppins text-white text-sm sm:text-xs sm:translate-y-60 md:text-base md:translate-x-16 md:-translate-y-52'>
            <p>mars@thapar.edu</p>
          </div>
        </div>
      </div>
      </div>

      <div className=' mt-4 translate-x-0  md:translate-x-[8rem] md:translate-y-[-2rem] '>
        {/* Social Media Links */}
        <a
          href='https://www.instagram.com/mars_tiet/'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block mx-2'
        >
          <img
            src={insta}
            alt='Instagram'
            className='w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 hover:scale-110 hover:brightness-125'
          />
        </a>
        <a
          href='https://github.com/mars-tu'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block mx-2'
        >
          <img
            src={github}
            alt='GitHub'
            className='w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 hover:scale-110 hover:brightness-125'
          />
        </a>
        <a
          href='https://www.linkedin.com/company/mechatronics-and-robotics-society-tiet'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block mx-2'
        >
          <img
            src={linkedin}
            alt='LinkedIn'
            className='w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 hover:scale-110 hover:brightness-125'
          />
        </a>
      </div>
    </div>
  );
}

export default Form;
