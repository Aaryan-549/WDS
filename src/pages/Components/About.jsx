import React from 'react';
import AboutImage from '../assets/Aboutbg.png';
import Box from './Box';
import Box1 from './Box1';
import Box2 from './Box2';

const AboutSection = () => {
  return (
    <div>
      <div style={{ zIndex: -1 }} className="nulshock relative h-screen w-full bg-stone-950">
        <div className="p-10">
          <div style={{ zIndex: 1 }} className="px-60 py-10">
            <h1 className="font-bold text-gray-900 text-3xl ml-4">OUR STORY</h1>
          </div>
          <div
            className="absolute nulshock text-8xl text-white font-bold opacity-20 translate-x-60"
            style={{ top: '2.625rem', left: '2.080rem' }} // Adjust according to your needs
          >
            01
          </div>
          <p className="px-60 p-0 nulshock text-gray-900 font-small">
            MARS (Mechatronics and Robotics Society) is one of the leading technical
            societies at Thapar University which is dedicated towards advancing in the
            fields of robotics and mechatronics. We provide a platform for robotics
            enthusiasts to improve and showcase their skills by working on actual
            projects.
          </p>
          <p className="px-60 py-10 nulshock text-gray-900 text-m">
            As a technical society, our primary work is on mobile and research-based
            projects associated with robotics and mechatronics, providing hands-on
            workshops, lectures, and seminars for school students. Our society is
            building an autonomous rover to present at the International Rover
            Challenge, which will work in conditions similar to the surface of the planet
            Mars, collect soil samples, and perform chemical tests to detect life.
          </p>
          <div className="relative">
            <div className="grid grid-cols-6 grid-rows-1 gap-x-1 mt-4">
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
        <img
          style={{ zIndex: -2 }}
          src={AboutImage}
          alt="about"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutSection;
