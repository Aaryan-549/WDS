import React from 'react';

const Mission = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-8">
      <div className="flex space-x-8">
        <div className="flex-col">
          <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-500 mb-4">
            OUR VISION
          </h1>
          <p className="text-white ">
            To be a beacon of innovation and excellence, shaping a future where
            creativity and technology converge to create lasting impact and
            inspire positive change.
          </p>
        </div>
        <div className="flex-col">
          <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-500 mb-4">
            OUR MISSION
          </h1>
          <p className="text-white ">
            To harness the power of technology and collaboration, delivering
            groundbreaking solutions that drive progress and empower individuals
            to achieve their fullest potential.
          </p>
        </div>
      </div>
      <button className="bg-[#FE6E3A] w-72 h-14 text-[#1E1E1E] py-2 px-4 rounded-lg font-bold text-2xl">
        JOIN THE CREW
      </button>
    </div>
  );
};

export default Mission;