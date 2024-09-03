import React from 'react';
import WorkshopCard from './WorkshopCard';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import MechanicalCard from './Mechanical';
import ElectronicsCard from './Electronics';
import ComputerCard from './Computer';
import image1 from '../assets/image 1.png';
import achievements from '../assets/ach.png';
import group from '../assets/Group 8678.png';

function Drive() {
  return (
    <div className="overflow-hidden relative min-h-screen w-full bg-stone-950 flex flex-col items-center justify-center gap-10 px-4 sm:px-10">
      {/* First Section: Cards */}
      <div className="relative w-full h-auto max-w-6xl flex flex-col items-start justify-end">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Card3 className="w-full sm:w-40 h-40" />
          <Card4 className="w-full sm:w-40 h-40" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
          <Card1 className="w-full sm:w-40 h-40" />
          <Card2 className="w-full sm:w-40 h-40" />
          <WorkshopCard className="w-full sm:w-40 h-40" />
        </div>
      </div>

      {/* Container for image and text */}
      <div className="relative w-full flex flex-col items-center">
        <img src={image1} alt="image1" className="w-full h-auto" />
        
        {/* Text positioned over the image */}
        <div className="absolute translate-y-2.5 sm:-translate-y-2.5 sm:-translate-x-60 w-full flex justify-center">
          <div className="text-white nulshock font-bold text-2xl sm:text-3xl">
            DEPARTMENTS
          </div>
        </div>
        
        <div className="absolute translate-y-12 sm:-translate-x-24 w-full flex justify-center">
          <div className="text-gray-300 text-xs sm:text-m">
            Exploring Excellence Across Our Departments
          </div>
        </div>
      </div>

      {/* New section for Mechanical, Electronics, and Computer */}
      <div className="relative w-full flex flex-col items-center gap-6 sm:gap-10 mt-6 sm:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <MechanicalCard className="w-full sm:w-40 h-40" />
          <ElectronicsCard className="w-full sm:w-40 h-40" />
          <ComputerCard className="w-full sm:w-40 h-40" />
        </div>
      </div>

      {/* Container for achievements and pic */}
      <div className="relative w-full h-auto mt-10">
        <img src={achievements} alt="achievements" className="w-full h-auto" />
        
      </div>
    </div>
  );
}

export default Drive;
