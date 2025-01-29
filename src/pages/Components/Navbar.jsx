import React, { useState, useEffect } from 'react';
import Header from '../assets/2.png';
import econ from '../assets/econ.png';
import { Menu } from 'lucide-react'; // Importing a hamburger menu icon from lucide-react

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`sticky top-0 z-50 bg-transparent shadow-lg transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="md:hidden">
        <div className="relative flex justify-between items-center p-4 md:hidden">
          {/* Logo */}
          <img src={econ} alt="econ" className="w-12 h-auto z-10" />

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="text-white border border-gray-300 rounded-lg p-2 focus:outline-none hover:bg-black-700"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-55 shadow-md z-20 text-center">
            <a
              href="#"
              className="block py-2 text-white-500 transition duration-300 hover:text-purple hover:bg-transparent"
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 text-white-500 transition duration-300 hover:text-purple hover:bg-transparent"
            >
              About
            </a>
            <a
              href="#schedule"
              className="block py-2 text-white-500 transition duration-300 hover:text-purple hover:bg-transparent"
            >
              Schedule
            </a>
            <a
              href="#faq"
              className="block py-2 text-white-500 transition duration-300 hover:text-purple hover:bg-transparent"
            >
              FAQ
            </a>
          </div>
        )}
      </div>

      <div className="hidden md:block">
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
    </div>
  );
}

export default Navbar;
