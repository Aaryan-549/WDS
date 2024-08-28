import React from 'react';
import OURVISION from './images/OUR VISION.png'
import OURMISSION from './images/OUR MISSION.png'

const Mission = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-8 mt-20">
      <div className="flex flex-col md:flex-row justify-center space-x-8">
        <div className="flex flex-col items-start md:pl-20">
          <img src={OURVISION} className='mb-4'/>
          <p className="text-white text-sm md:text-lg font-poppins mb-20 md:w-2/3 h-16">
            To be a beacon of innovation and excellence, shaping a future where
            creativity and technology converge to create lasting impact and
            inspire positive change.
          </p>
        </div>
        <div className="flex flex-col items-start mb-10 md:mb-0">
          <img src={OURMISSION} className='mb-4'/>
          <p className="text-white text-sm md:text-lg font-poppins md:w-2/3 h-16">
            To harness the power of technology and collaboration, delivering
            groundbreaking solutions that drive progress and empower individuals
            to achieve their fullest potential.
          </p>
        </div>
      </div>
      <button className="bg-[#FE6E3A] w-48 h-9 flex items-center justify-center md:w-72 md:h-14 text-[#1E1E1E] py-4 px-4 rounded-lg font-bold nulshock text-base mt-10 md:text-2xl hover:bg-orange-500">
        JOIN THE CREW
      </button>
    </div>
  );
};

export default Mission;