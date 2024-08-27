import React, { useState } from 'react';
import Insta from './images/Group.png';
import LinkedIn from './images/Social Media.png';

const MemberCard = ({ image, name, role }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className="relative w-44 h-52 sm:w-64 sm:h-80 rounded-lg overflow-hidden shadow-md cursor-pointer"
      onClick={handleCardClick}
    >
      <img
        src={image}
        alt="Member Photo"
        className={`w-full h-full object-cover ${isClicked ? 'filter brightness-0' : ''}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/35"></div>

      {isClicked && (
        <div className="absolute bottom-0 left-0 w-full flex justify-center items-center pb-5">
          <a href="#" className="mx-2">
            <img src={Insta} alt="Instagram" className="w-8 h-8 size-lg" />
          </a>
          <a href="#" className="mx-2">
            <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8 size-lg" />
          </a>
        </div>
      )}

      {!isClicked && (
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 pb-5">
          <h2 className="text-[#F36E3A] text-sm font-bold nulshock sm:text-lg">{name}</h2>
          <p className="text-gray-300 text-xs font-poppins sm:text-sm">{role}</p>
        </div>
      )}
    </div>
  );
};

export default MemberCard;
