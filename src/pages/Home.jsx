import React, { useEffect, useState } from 'react';
import Nav from './Components/Nav';
import About from './Components/About';
import Hero from './Components/Hero';

const Home = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleMouseEnter = () => {
      setNavbarVisible(true);
    };

    const handleMouseLeave = () => {
      setNavbarVisible(false);
    };

    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.addEventListener('mouseenter', handleMouseEnter);
      navbar.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (navbar) {
        navbar.removeEventListener('mouseenter', handleMouseEnter);
        navbar.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <Nav className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${isNavbarVisible ? 'opacity-100' : 'opacity-0'}`} />
      <Hero />
      <About style={{ zIndex: -1 }} />
    </>
  );
};

export default Home;
