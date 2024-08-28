import React from 'react';
import mec from '../assets/Frame 8628.png';

function Computer() {
  return (
    <div className="relative w-72 h-72 mx-auto overflow-hidden transition-transform transform hover:scale-105">
      <img src={mec} alt="Computer" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div
          className="text-orange-600 nulshock text-xl font-bold mb-2 rounded"
          style={{ transform: 'translateY(3rem) translateX(-4.5rem)' }} // Adjusted to match -translate-x-18
        >
          Computer
        </div>
        <div className="text-gray-400 absolute inset-0 flex items-center justify-center font-poppins text-xs" style={{ transform: 'translateY(6rem) translateX(0.375rem)' }}>
          The Computer Department at MARS drives innovation with cutting-edge technology and software solutions, fostering technical excellence and creative problem-solving.
        </div>
      </div>
    </div>
  );
}

export default Computer;
