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
    <div className="relative min-h-[120vh] w-full bg-stone-950 flex flex-col items-center justify-center gap-10 px-10">
      
      <div className="relative w-full h-auto max-w-6xl flex flex-col items-start justify-end">
        <div className="grid grid-cols-2 gap-6">
          <Card3 className="w-40 h-40" />
          <Card4 className="w-40 h-40" />
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6">
          <Card1 className="w-40 h-40" />
          <Card2 className="w-40 h-40" />
          <WorkshopCard className="w-40 h-40" />
        </div>
      </div>

      {/* Container for image and text */}
      <div className="relative w-full flex flex-col items-center">
        <img src={image1} alt="image1" className="w-full h-auto" />
        
        {/* Text positioned over the image */}
        <div className="absolute -translate-y-2.5 -translate-x-60 w-full flex justify-center">
          <div className="text-white nulshock font-bold text-3xl">
            DEPARTMENTS
          </div>
        </div>
        
        <div className="absolute translate-y-12 -translate-x-24 w-full flex justify-center">
          <div className="text-gray-300 text-m">
            Exploring Excellence Across Our Departments
          </div>
        </div>
      </div>

      {/* New section for Mechanical, Electronics, and Computer */}
      <div className="relative w-full flex flex-col items-center gap-10 mt-10">
        <div className="grid grid-cols-3 gap-6">
          <MechanicalCard className="w-40 h-40" />
          <ElectronicsCard className="w-40 h-40" />
          <ComputerCard className="w-40 h-40" />
        </div>
      </div>

      {/* Container for achievements and pic */}
      <div className="relative w-full h-auto mt-10">
        <img src={achievements} alt="achievements" style={{ transform: 'translateX(100px) translateY(50px)' }}className="w-full h-auto" />
        <img src={pic} alt="pic" className="absolute inset-0 w-full h-auto object-contain max-h-96 mx-auto translate-y-60" />
        <div className="absolute inset-0 text-white font-poppins text-2xl object-contain translate-x-96 translate-y-96 top-72">
          <p style={{ transform: 'translateX(100px) translateY(20px' }}>EMERGING TEAM OF THE YEAR</p>
          <p style={{ transform: 'translateX(50px) translateY(20px' }}>OF INTERNATIONAL ROVER CHALLENGE</p>
        </div>
        <div style={{ transform: 'translateY(700px)' }} className="text-white text-3xl absolute inset-0 object-contain top-72">
          <p style={{ transform: 'translateX(400px)' }} className='nulshock'>"SUCCESS IS A JOURNEY,"</p><p style={{ transform: 'translateX(700px) translateY(0px)' }} className='nulshock'> NOT A DESTINATION."</p>
          <p style={{ transform: 'translateX(950px) translateY(20px)' }}className='font-poppins text-2xl' >- Arthur Ashe</p>
        </div>
      </div>

      {/* Group photo positioned at the bottom right */}
      <div className="absolute bottom-0 right-0 mb-32 mr-5">
        <img src={group} alt="group" className="w-120 h-auto object-contain" />
      </div>
    </div>
  );
}

export default Drive;