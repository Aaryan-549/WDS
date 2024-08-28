import React from 'react';
import Nav from './Components/Nav';
import About from './Components/About';
import Hero from './Components/Hero';
import Drive from './Components/Drive';
import Sponsors from './Components/Sponsors';

const Home = () => {
  return (
    <>
      <Nav className="z-10 fixed top-0 left-0 w-full" />
      <Hero />
      <About style={{ zIndex: -1 }} />
      <Drive />
      <Sponsors />
    </>
  );
};

export default Home;
