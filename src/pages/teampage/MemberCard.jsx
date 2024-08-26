import React from 'react';

const MemberCard = ({ image, name, role }) => {
  return (
    <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-lg">
      <img
        src={image}
        alt="Member Photo"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
        <h2 className="text-[#F36E3A] text-2xl font-semibold">{name}</h2>
        <p className="text-gray-300 text-xl">{role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
