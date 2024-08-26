import React from 'react'
import navImage from '../assets/Nav.png';




function Nav() {
  return (
    <div className="bg-stone-950 items-center flex relative">
        <img src={navImage} alt="nav" className='absolute flex-shrink-0 w-auto justify-center opacity-95 left-0 h-25 object-contain translate-x-[50] top-[-150px]' />
      <div className="text-white absolute top-0 left-0 right-0 flex justify-between px-20 py-10">
       <a href="/" className="hover:text-orange-500">Home</a>
        <a href="/projects" className="hover:text-orange-500">Projects</a>
        <a className='opacity-0'>Mars</a>
        <a href="../InnovationsSection" className="hover:text-orange-500">Blogs</a>
        <a href="../ImageGrid" className="hover:text-orange-500">Our Team</a>
      </div>
    </div>
  )
}

export default Nav
