import React from 'react'
import Nav from './Components/Nav'
import Hero from "./assets/Hero.png"

const Home = () => {
  return (
    <>
<div className='relative h-screen w-full bg-stone-950 '>
      <img src={Hero} alt="hero"  className='absolute top-0 left-0 h-full w-full object-cover' />
      <Nav className='absolute top-0 left-0 w-full' />
    </div> 
    </>
  )
}

export default Home