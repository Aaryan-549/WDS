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
import achievements from '../assets/Ach.png';
import pic from '../assets/pic.png';
import group from '../assets/Group 8678.png';

function Drive() {
  return (
    <div className="overflow-hidden relative min-h-[120vh] w-full bg-stone-950 flex flex-col items-center justify-center gap-10 px-4 sm:px-10">
      
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
        <img src={achievements} alt="achievements" style={{ transform: 'translateX(10px) translateY(20px)' }} className="w-full h-auto" />
        <img src={pic} alt="pic" className="absolute inset-0 w-full h-auto object-contain max-h-96 mx-auto translate-y-40 sm:translate-y-60" />
        <div className="absolute inset-0 text-white font-poppins font-bold text-lg sm:text-2xl object-contain sm:translate-x-96 sm:translate-y-96 top-40 sm:top-72">
          <p style={{ transform: 'translateX(10px) translateY(20px)' }}>EMERGING TEAM OF THE YEAR</p>
          <p style={{ transform: 'translateX(5px) translateY(20px)' }}>OF INTERNATIONAL ROVER CHALLENGE</p>
        </div>
        <div style={{ transform: 'translateY(400px)' }} className="text-white text-xl sm:text-3xl absolute inset-0 object-contain top-72">
          <p style={{ transform: 'translateX(10px)' }} className='nulshock'>"SUCCESS IS A JOURNEY,"</p><p style={{ transform: 'translateX(70px) translateY(0px)' }} className='nulshock'> NOT A DESTINATION."</p>
          <p style={{ transform: 'translateX(90px) translateY(20px)' }}className='font-poppins text-lg sm:text-2xl' >- Arthur Ashe</p>
        </div>
      </div>

      {/* Group photo positioned at the bottom right */}
      <div className="overflow-hidden absolute bottom-0 right-0 mb-32">
        <img src={group} alt="group" className="w-60 sm:w-120 h-auto object-contain " />
      </div>
    </div>
  );
}

export default Drive;
