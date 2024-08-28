import React from 'react';
import Nav from './Components/Nav';
import About from './Components/About';
import Hero from './Components/Hero';
import Drive from './Components/Drive';
import HallOfFame from './Components/HallOfFame';

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About style={{ zIndex: -1 }} />
      <Drive />
      <HallOfFame />
    </>
  );
};

export default Home;
