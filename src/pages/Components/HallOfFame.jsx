import React from 'react';
import Mechanical from './Mechanical';
import Electronics from './Electronics';
import Computer from './Computer';
import achievements from '../assets/Group 8685.png';

function HallOfFame() {
  return (
    <div className="relative min-h-full w-full bg-stone-950">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-8 lg:p-10">
        {/* Mechanical, Electronics, and Computer sections */}
        <Mechanical />
        <Electronics />
        <Computer />

        {/* Achievements Image */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center mt-6 sm:mt-10">
          <img src={achievements} alt="achievements" className="w-full h-auto max-w-3xl" />
        </div>
      </div>
    </div>
  );
}

export default HallOfFame;
