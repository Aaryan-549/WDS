import React from 'react';
import mec from '../assets/Frame 8627.png';

function Electronics() {
  return (
    <div className="relative w-72 h-72 mx-auto overflow-hidden transition-transform transform hover:scale-105">
      <img src={mec} alt="Electronics" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div
          className="text-orange-600 nulshock text-xl font-bold mb-2 rounded"
          style={{ transform: 'translateY(3rem) translateX(-3.5rem)' }} // Adjust as needed
        >
          Electronics
        </div>
        <div className="text-gray-400 absolute inset-0 flex items-center justify-center font-poppins text-xs" style={{ transform: 'translateY(6rem) translateX(0.125rem)' }}>
          The Electronics Department of MARS excels in circuit design and electronic innovations, bridging technical expertise with practical problem-solving.
        </div>
      </div>
    </div>
  );
}

export default Electronics;
