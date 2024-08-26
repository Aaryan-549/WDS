import React from 'react';

const MemberCard = ({ photoUrl, name, role }) => {
  return (
    <div className="w-[203px] h-[252px] bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={photoUrl} 
        alt={`${name}'s photo`} 
        className="w-full h-3/4 object-cover" 
      />
      <div className="p-4">
        <h2 className="text-orange-500 text-lg font-semibold mb-1">{name}</h2>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
