import React from 'react';
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import four from '../assets/four.png';
import five from '../assets/five.png';

function Sponsors() {
  return (
    <div className='relative min-h-screen w-full bg-stone-950 flex flex-col items-center justify-center p-4'>
      {/* Sponsors Title */}
      <div className='nulshock text-white text-3xl mb-8 text-center sm:static sm:mt-12 md:mt-16'>
        OUR SPONSORS
      </div>

      {/* Logos Grid */}
      <div className='flex flex-col items-center'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-60'>
          {/* First Row: Three logos */}
          <img src={one} alt="one" className="w-36 h-36 sm:w-48 sm:h-48 object-contain" />
          <img src={two} alt="two" className="w-36 h-36 sm:w-48 sm:h-48 object-contain" />
          <img src={three} alt="three" className="w-36 h-36 sm:w-48 sm:h-48 object-contain" />
        </div>

        {/* Second Row: Two logos */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-60 mt-8 sm:mt-0 md:-translate-x-52'>
          <div className="hidden sm:block"></div> {/* Empty space for centering on large screens */}
          <img src={four} alt="four" className="w-36 h-36 sm:w-48 sm:h-48 object-contain" />
          <img src={five} alt="five" className="w-36 h-36 sm:w-48 sm:h-48 object-contain" />
          <div className="hidden sm:block"></div> {/* Empty space for centering on large screens */}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
