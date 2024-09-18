import React from 'react';

function Hero() {
  return (
    <div className="relative h-auto w-full
     bg-stone-950  flex items-center justify-center">
      <img
        src={'./hero.svg'}
        alt="hero"
        className="md:w-screen mt-5 md:mt-10 sm:w-[160%] sm:h-auto md:h-auto object-contain "
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}

export default Hero;
