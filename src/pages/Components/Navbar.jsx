import React, { useState, useEffect } from 'react';
import Header from '../assets/2.png';
import econ from '../assets/econ.png';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset;

    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      setIsVisible(false);
    } else if (currentScrollTop < lastScrollTop) {
      // Scrolling up
      setIsVisible(true);
    }

    // Prevent negative scroll values
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
      className={`sticky top-0 z-50 bg-transparent shadow-lg transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute grid grid-cols-5 gap-2 mt-8 text-center font-semibold items-center text-4xl Red-Rose">
        <img src={econ} alt="econ" className="w-58 h-auto z-10" />
        <a
          href="#"
          className="relative text-black transition duration-300 hover:text-gray-900"
        >
          Home
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
        </a>
        <a
  href="#about"
  className="relative text-black transition duration-300 hover:text-gray-900"
>
  About
  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
</a>
<a
  href="#schedule"
  className="relative text-black transition duration-300 hover:text-gray-900"
>
  Schedule
  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
</a>
<a
  href="#faq"
  className="relative text-black transition duration-300 hover:text-gray-900"
>
  FAQ
  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
</a>
      </div>

      {/* Header Image */}
      <img src={Header} alt="header" className="w-screen object-contain" />
    </div>
  );
}

export default Navbar;
