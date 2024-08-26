import React, { useState, useEffect } from 'react';
import navImage from '../assets/Navi.png';
import mars from '../assets/mars.png';

const Nav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  // Handler for scroll event
  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset;
    
    if (currentScrollTop > lastScrollTop && currentScrollTop > 0) {
      // Scrolling down
      setIsVisible(false);
    } else if (currentScrollTop < lastScrollTop) {
      // Scrolling up
      setIsVisible(true);
    }

    // Ensure visibility when at the top of the page
    if (currentScrollTop === 0) {
      setIsVisible(true);
    }

    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
  };

  // Event listeners for scroll and mouse enter/leave
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setScrolling(true); // Keep the navbar hidden when not scrolling

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      setScrolling(false);
    }, 2000); // Show navbar for 2 seconds after scrolling stops

    return () => clearTimeout(scrollTimeout);
  }, [scrolling]);

  return (
    <div 
      className={`navbar sticky top-0 bg-stone-950 items-center flex grid-rows-1 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src={navImage} 
        alt="nav" 
        className="absolute flex-shrink-0 w-auto justify-center opacity-95 left-0 h-25 object-contain translate-x-[50]" 
      />
      <div className="nulshock text-white absolute top-0 left-0 right-0 flex justify-between grid-cols-5 px-20 py-10 font-bold">
        <a href="/" className="hover:text-orange-500">HOME</a>
        <a href="/projects" className="hover:text-orange-500">PROJECTS</a>
        <img src={mars} alt="mars" className="h-11 w-auto flex" />
        <a href="../InnovationsSection" className="hover:text-orange-500">BLOGS</a>
        <a href="../ImageGrid" className="hover:text-orange-500">OUR TEAM</a>
      </div>
    </div>
  );
};

export default Nav;
