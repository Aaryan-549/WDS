import React from "react";
import GroupPhoto from "./images/Subtract.png";
import LeftVector from "./images/Vector.svg";
import RightVector from "./images/Vector (1).svg"; 
import LeftRectangle from "./images/Rectangle 4752.png"; 
import Rocket from "./images/ion_rocket-outline.png"

const Visionaries = () => {
    return (
      <div className="relative bg-black min-h-screen flex items-center justify-center">
        {/* Image with Text Overlay */}
        <div className="relative">
          <img
            src={GroupPhoto}
            alt="Group Photo"
            className="max-w-none h-auto rounded-xl shadow-lg"
          />
          <div className="absolute bottom-0 left-0 p-4 w-[50%] text-left">
            <p className="text-white text-lg mt-2">
              <span className="block">Discover the passionate</span>
              <span className="block">minds behind our success.</span>
            </p>
            <h1 className="text-white text-4xl font-bold leading-tight">
              MEET THE <span className="text-[#FE6E3A]">VISIONARIES</span>
            </h1>
          </div>
          <img
          src={Rocket}
          alt="Rocket"
          className="absolute top-4 right-4 w-12 h-12"
          />
        </div>
        <img src={LeftVector} className="absolute top-0 left-0 "></img>
        <img src={RightVector} className="absolute top-0 right-0 "></img>
      </div>
    );
  };
  
export default Visionaries;