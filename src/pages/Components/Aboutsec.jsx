import React from 'react';
import Two from '../assets/Polygon 2.png'; 
import Three from '../assets/Polygon 3.png'; 
import Ourstory from './Ourstory';
import bg from '../assets/bg.png';
import Box from './Box';
import Box1 from './Box1';
import Box2 from './Box2';

function Aboutsec() {
  return (
    <div className='nulshock relative h-full w-full bg-stone-950'>
      {/* Image for the background */}
      <img 
        src={bg} 
        alt="Background" 
        className='absolute justify-center' 
      />

      <div className='translate-y-[0%] md:translate-y-[5%] translate-x-[0%] h-[80vw] w-[80vw]'>
        <Ourstory />
        <p className="mx-[10%] font-poppins text-gray-950 text-xxxs md:text-xl font-semibold translate-y-[20%] translate-x-[10%] md:translate-y-[80%] md:translate-x-[5%] object-contain">
          MARS (Mechatronics and Robotics Society) is one of the leading technical
          societies at Thapar University, which is dedicated to advancing in the fields of robotics and mechatronics.
          We provide a platform for robotics enthusiasts to improve and showcase their skills by working on actual
          projects.
        </p>
        <p className="mx-[10%] font-poppins text-gray-950 text-xxxs md:text-xl font-semibold translate-y-[35%] translate-x-[20%] md:translate-y-[100%] md:translate-x-[25%]">
          As a technical society, our primary work is on mobile and research-based projects associated with robotics
          and mechatronics, providing hands-on workshops, lectures, and seminars for school students. Our society is
          building an autonomous rover to present at the International Rover Challenge, which will work in conditions
          similar to the surface of the planet Mars, collect soil samples, and perform chemical tests to detect life.
        </p>
        
        {/* Grid with Box, Box1, and Box2 */}
        <div className="grid grid-cols-3  translate-y-[42%] translate-x-[35%] md:translate-y-[150%] md:translate-x-[40%]">
          <Box />
          <Box1 />
          <Box2 />
        </div>
      </div>

      <img 
        src={Two} 
        alt="Top Right Polygon" 
        className='absolute top-0 -translate-y-[35%] right-0 w-[100px] md:w-[550px]' 
      />

      {/* Image for the bottom left */}
      <img 
        src={Three} 
        alt="Bottom Left Polygon" 
        className='absolute translate-y-[15%] bottom-0 left-0 w-[100px] md:w-[550px]' 
      />
    </div>
  );
}

export default Aboutsec;
