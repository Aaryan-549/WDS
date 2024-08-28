import React from 'react';
import Mechanical from './Mechanical';
import Electronics from './Electronics';
import Computer from './Computer';

function HallOfFame() {
  return (
    <div className="relative min-h-[160vh] w-full bg-stone-950">
      <div className="grid grid-cols-3 gap-4 p-10">
        <Mechanical />
        <Electronics />
        <Computer />
      </div>
    </div>
  );
}

export default HallOfFame;
