import React from 'react'
import WorkshopCard from './WorkshopCard'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'


function Drive() {
  return (
    <div style={{ zIndex: -1 }} className="relative h-screen w-full bg-stone-950">
      <WorkshopCard />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />

    </div>
  )
}

export default Drive
