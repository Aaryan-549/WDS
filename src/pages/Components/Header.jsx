import React from "react";
import header from "../assets/header.png";


const Header = ({ line1, line2 }) => {
  return (
        <div className="relative w-full h-full">
            <img src={header} alt="Header" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 flex flex-col items-start justify-center text-white bg-black bg-opacity-20">
                <p className="ml-[1em] text-8xl font-bold nulshock uppercase">{line1}</p>
                <p className="pl-[3.5em] text-8xl font-bold nulshock uppercase">{line2}</p>
            </div>
        </div>
  );
}

export default Header;