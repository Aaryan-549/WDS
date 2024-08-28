import React from 'react';
import mec from '../assets/Frame 8626.png';

function Mechanical() {
  return (
    <div className="relative w-72 h-72 mx-auto overflow-hidden transition-transform transform hover:scale-105">
      <img src={mec} alt="mec" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div
          className="text-orange-600 nulshock text-xl font-bold p-2 rounded"
          style={{ transform: 'translateY(2.9rem) translateX(-3.5rem)' }} // Adjust as needed
        >
          Mechanical
        </div>
        <div className="text-gray-400 absolute inset-0 flex items-center justify-center font-poppins text-xs" style={{ transform: 'translateY(6rem) translateX(0.375rem)' }}>
          The Mechanical Department at MARS provides advanced engineering solutions and innovative design, driving practical applications and problem-solving.
        </div>
      </div>
    </div>
  );
}

export default Mechanical;
