import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed
import lines from '../assets/lines.png';

function Footer() {
  return (
    <div className='relative h-[30vh] w-full bg-stone-950 z-[-1] overflow-hidden flex flex-col justify-end items-center'>
      <img
        src={lines}
        alt='lines'
        style={{ transform: 'translateX(0rem) translateY(6rem)' }}
        className='absolute inset-0 w-40 h-full object-cover'
      />
      <div style={{ transform: 'translateX(0rem) translateY(-2rem)' }} className='text-s text-poppins justify-center text-white'>
        Join our growing community of robotics enthusiasts.
      </div>
      <Link
        to="src/pages/TeamPage.jsx" 
        className='mb-4 p-3 bg-orange-500 text-black text-lg font-bold rounded-lg hover:bg-orange-600 transition-colors'
      >
        JOIN NOW
      </Link>
    </div>
  );
}

export default Footer;
