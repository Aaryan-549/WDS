import React from 'react';
import Heroimg from '../assets/hero.png';

function Hero() {
  return (
    <div className="relative h-auto w-full
     bg-stone-950  flex items-center justify-center">
      <img
        src={Heroimg}
        alt="hero"
        className="md:w-screen sm:w-[160%] sm:h-auto md:h-auto object-contain"
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}

export default Hero;
