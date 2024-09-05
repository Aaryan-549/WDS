import React, { useState, useEffect } from 'react';
import navImage from '../assets/Navi.png';
import mars from '../assets/mars.png';
import { Link, useNavigate } from 'react-router-dom';
import mobilenavmars from '../assets/mobile nav mars.png'
import hamburger from '../assets/hamburger.png'

const Nav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  const[menuopen,setmenuopen] = useState(false);

  const togglemenu =() => {
    setmenuopen(!menuopen);
  }

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

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setScrolling(true);

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      setScrolling(false);
    }, 2000);

    return () => clearTimeout(scrollTimeout);
  }, [scrolling]);

  const navigate = useNavigate();
  
  return (
    <>
      {/* Desktop Navigation */}
      <div
        className={`navbar sticky top-0 bg-stone-950 items-center flex grid-rows-1 transition-opacity z-10 duration-300 hidden md:flex ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-center items-center w-full">
          <img
            src={navImage}
            alt="nav"
            className="w-[70%] items-center absolute flex-shrink-0 justify-center opacity-95 h-25 object-contain translate-x-[50]"
          />
          <div className="nulshock text-white absolute top-0 left-0 right-0 flex justify-between grid-cols-5 py-7 mx-[20%] font-bold">
            <Link to="/" className="hover:text-orange-500 text-sm">HOME</Link>
            <Link to="/projects" className="hover:text-orange-500 text-sm">PROJECTS</Link>
            <img src={mars} onClick={() => navigate('/')} alt="mars" className="cursor-pointer h-11 w-auto flex" />
            <Link to="../blog" className="hover:text-orange-500 text-sm">BLOGS</Link>
            <Link to="/teampage" className="hover:text-orange-500 text-sm">OUR TEAM</Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`navbar sticky top-0 bg-stone-950 flex md:hidden items-center justify-between transition-opacity z-10 duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={mobilenavmars} alt='mars' onClick={() => navigate('/')} className='h-8 absolute top-0 left-0'/>
        <div className='absolute top-0 right-0'>
          <button onClick={togglemenu} className='relative overflow-hidden w-auto h-8'>
            <img src={hamburger} alt='hamburger' className=''/>
          </button>
        </div>

        {menuopen && (
          <div className="absolute top-6 right-0 bg-stone-900 text-white w-40 shadow-lg flex flex-col items-end pr-4 font-poppins rounded-md">
          <Link to="/" className="py-2 px-4 hover:text-orange-500" onClick={togglemenu}>Home</Link>
          <Link to="/projects" className="py-2 px-4 hover:text-orange-500" onClick={togglemenu}>Projects</Link>
          <Link to="/blog" className="py-2 px-4 hover:text-orange-500" onClick={togglemenu}>Blogs</Link>
          <Link to="/teampage" className="py-2 px-4 hover:text-orange-500" onClick={togglemenu}>Our Team</Link>
        </div>
        )}
      </div>
    </>
  );
};

export default Nav;
