import React from 'react'
import Heroimg from '../assets/Hero.png';

function Hero() {
  return (
      <div style={{ zIndex: -1 }} className="relative h-screen w-full bg-stone-950">
        <img src={Heroimg} alt="hero" className="absolute top-0 left-0 h-full w-full object-cover" />
      </div>
  )
}

export default Hero
