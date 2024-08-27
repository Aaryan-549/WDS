import React from 'react';
import OURVISION from './images/OUR VISION.png'
import OURMISSION from './images/OUR MISSION.png'

const Mission = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-8">
      <div className="flex justify-center space-x-8">
        <div className="flex flex-col items-center">
          <img src={OURVISION} className='mb-5'/>
          <p className="text-white font-poppins w-2/3 h-16">
            To be a beacon of innovation and excellence, shaping a future where
            creativity and technology converge to create lasting impact and
            inspire positive change.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={OURMISSION} className='mb-5'/>
          <p className="text-white font-poppins w-2/3 h-16">
            To harness the power of technology and collaboration, delivering
            groundbreaking solutions that drive progress and empower individuals
            to achieve their fullest potential.
          </p>
        </div>
      </div>
      <button className="bg-[#FE6E3A] w-72 h-14 text-[#1E1E1E] py-2 px-4 rounded-lg font-bold nulshock text-2xl">
        JOIN THE CREW
      </button>
    </div>
  );
};

export default Mission;