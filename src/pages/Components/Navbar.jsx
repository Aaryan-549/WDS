import React, { useState, useEffect } from 'react';
import Header from '../assets/2.png';
import econ from '../assets/econ.png';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset;

    if (currentScrollTop > lastScrollTop && currentScrollTop > 0) {
      setIsVisible(false);
    } else if (currentScrollTop < lastScrollTop) {
      setIsVisible(true);
    }

    if (currentScrollTop === 0) {
      setIsVisible(true);
    }

    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div
      className={`sticky top-0 z-50 bg-transparent shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Header Image */}
      <img src={Header} alt="header" className="w-screen object-contain" />

      {/* Econ Image Positioned Smaller and to the Left */}
      <img
        src={econ}
        alt="econ"
        className="absolute top-4 left-8 w-52 h-auto z-10"
      />
    </div>
  );
}

export default Navbar;