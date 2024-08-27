import React from 'react';
import WorkshopCard from './WorkshopCard';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';

function Drive() {
  return (
    <div style={{ zIndex: -1 }} className="relative h-screen w-full bg-stone-950 flex flex-col items-start justify-center gap-10">
      <div className="grid grid-cols-2 gap-10">
        <Card1 />
        <Card2 />
      </div>
      <div className="grid grid-cols-3 gap-10">
        <Card3 />
        <Card4 />
        <WorkshopCard />
      </div>
    </div>
  );
}

export default Drive;