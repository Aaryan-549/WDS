import React from 'react';
import { Link } from 'react-router-dom';
import lines from '../assets/lines.png';

function Footer() {
  return (
    <div className='relative h-[30vh] w-full bg-stone-950 overflow-hidden flex flex-col justify-end items-center'>
      <img
        src={lines}
        alt='lines'
        style={{ transform: 'translateX(0rem) translateY(6rem)' }}
        className='absolute inset-0 w-40 h-full object-cover'
      />
      <div
        className='relative text-center text-white text-sm sm:text-lg'
        style={{ transform: 'translateY(-2rem)' }}
      >
        Join our growing community of robotics enthusiasts.
      </div>
      <Link
        to="/teampage"
        className='relative mb-4 p-3 bg-orange-500 text-black text-lg font-bold rounded-lg hover:bg-orange-600 transition-colors duration-300'
      >
        JOIN NOW
      </Link>
    </div>
  );
}

export default Footer;
