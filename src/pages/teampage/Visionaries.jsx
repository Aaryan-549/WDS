import React from "react";
import Photo from './images/Group 8673.png'
import PhotoMobile from './images/Group 8698.png'

const Visionaries = () => {
    return (
      <div className="overflow-hidden">
        <img src={PhotoMobile} className="w-full h-full mt-20 object-cover transform scale-[1.75] -translate-y-10 md:hidden"/>
        <img src={Photo} className="hidden md:block w-full h-full object-cover transform scale-[2] -translate-y-10"/>
      </div>
    );
  };
  
export default Visionaries;