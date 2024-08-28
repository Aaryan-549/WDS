import React from 'react';
import WorkshopCard from './WorkshopCard';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';

function Drive() {
  return (
    <div className="relative min-h-[120vh] w-full bg-stone-950 flex flex-col items-center justify-center gap-10 px-10">
      
      <div className="relative w-full h-auto max-w-6xl flex flex-col items-start justify-end">
        <div className="grid grid-cols-2 gap-6">
          <Card1 className="w-40 h-40" />
          <Card2 className="w-40 h-40" />
        </div>
        <div className="grid grid-cols-3 gap-6 mt-6">
          <Card3 className="w-40 h-40" />
          <Card4 className="w-40 h-40" />
          <WorkshopCard className="w-40 h-40" />
        </div>
      </div>
    </div>
  );
}

export default Drive;
