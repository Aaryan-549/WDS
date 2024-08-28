import React from 'react';
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import four from '../assets/four.png';
import five from '../assets/five.png';

function Sponsors() {
  return (
    <div className='relative min-h-full w-screen bg-stone-950 flex items-center justify-center'>
      <div style={{ transform: 'translateX(33rem) translateY(-13rem)'}} className='nulshock text-white text-3xl top-0 justify-center'>OUR SPONSORS</div>
      <div style={{ transform: 'translateX(-10rem) translateY(12rem)'}}>
        <div className='grid grid-cols-3 gap-60'>
          {/* First Row: Three logos */}
          <img src={one} alt="one" className="w-48 h-48 object-contain" />
          <img src={two} alt="two" className="w-48 h-48 object-contain" />
          <img src={three} alt="three" className="w-48 h-48 object-contain" />
        </div>
        <div style={{ transform: 'translateX(-12rem) translateY(0rem)'}} className='grid grid-cols-3 gap-60'>
          {/* Second Row: Two logos, centered */}
          <div className="col-span-1"></div> {/* Empty space to center the logos */}
          <img src={four} alt="four" className="w-48 h-48 object-contain" />
          <img src={five} alt="five" className="w-48 h-48 object-contain" />
          <div className="col-span-1"></div> {/* Empty space to balance the row */}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
