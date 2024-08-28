import React from 'react';
import Mechanical from './Mechanical';
import Electronics from './Electronics';
import Computer from './Computer';
import achievements from '../assets/Achievements-1.png';

function HallOfFame() {
  return (
    <div className="relative min-h-[160vh] w-full bg-stone-950">
      <div className="grid grid-cols-3 gap-4 p-10">
        <Mechanical />
        <Electronics />
        <Computer />
        <img src={achievements} alt="achievements" className="w-full h-auto mt-10" />
      </div>
    </div>
  );
}

export default HallOfFame;
