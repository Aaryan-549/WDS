import React from 'react';
import AboutImage from '../assets/Aboutbg.png';
import Box from './Box';
import Box1 from './Box1';
import Box2 from './Box2';
import rect from '../assets/rect2.png';

const AboutSection = () => {
  return (
    <div>
      {/* About Section */}
      <div style={{ zIndex: 1 }} className="nulshock relative min-h-[160vh] w-full bg-stone-950">
        <div className='translate-y-48'>
        <div className="p-10">
          <div style={{ zIndex: 2 }} className="px-60 py-10">
            <h1 className="font-bold text-gray-900 text-3xl ml-4">OUR STORY</h1>
          </div>
          <div
            className="absolute nulshock text-8xl text-white font-bold opacity-20 translate-x-60"
            style={{ top: '2.625rem', left: '2.080rem' }}
          >
            01
          </div>
          <p className="mt-20 px-60 p-0 font-poppins text-gray-950 text-lg font-semibold">
            MARS (Mechatronics and Robotics Society) is one of the leading technical
            societies at Thapar <p>University which is dedicated towards advancing in the
            fields of robotics and mechatronics.<p> We provide a platform for robotics
            enthusiasts to improve and showcase their skills by working on actual
            projects.</p></p>
          </p>
          <p className="mt-1 top-[-5] px-60 py-10 font-poppins text-gray-950 text-lg font-semibold">
            As a technical society, our primary work is on mobile and research-based
            projects associated with robotics and mechatronics, providing hands-on
            workshops, lectures, and seminars for school students. Our society is
            building an autonomous rover to present at the International Rover
            Challenge, which will work in conditions similar to the surface of the planet
            Mars, collect soil samples, and perform chemical tests to detect life.
          </p>
          <div className="relative">
            <div className="grid grid-cols-6 grid-rows-1 gap-x-1 mt-8">
              <div className="col-start-4 row-start-1 col-span-2 -translate-y-12 translate-x-12 ">
                <Box />
              </div>
              <div className="col-start-5 row-start-1 col-span-2 -translate-y-12 -translate-x-4 ">
                <Box1 />
              </div>
              <div className="col-start-6 row-start-1 col-span-2 -translate-y-12 -translate-x-20">
                <Box2 />
              </div>
            </div>
          </div>
        </div>
        </div>
        <img
          style={{ zIndex: -1 }}
          src={AboutImage}
          alt="about"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
      </div>
      
      {/* Drive Section */}
      <div className="relative w-full flex justify-center z-10 -mt-32">
        <img src={rect} alt="rect" className="w-[65%] h-auto translate-x-20" />
        
        {/* Centering the "WHAT DRIVES US" text on the image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white nulshock text-3xl translate-x-28 ">
            WHAT DRIVES US
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
