import React from 'react';
import Header from '../assets/2.png';
import econ from '../assets/econ.png';

function Navbar() {
  return (
    <div className='relative'>
      {/* Header Image */}
      <img src={Header} alt="header" className='w-screen' />

      {/* Econ Image Positioned Smaller and to the Left */}
      <img
        src={econ}
        alt="econ"
        className='absolute top-0 left-8 w-52 h-auto z-10'
      />
    </div>
  );
}

export default Navbar;
