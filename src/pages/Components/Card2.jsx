import React from 'react';
import Vector from '../assets/Group.png';

const WorkshopCard = () => {
  return (
    <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 text-white p-6 rounded-lg w-80 h-80 mx-auto flex flex-col justify-end items-start">
      <div className="mb-4">
        <img src={Vector} alt="Workshop Icon" className="mb-2 w-auto h-auto max-w-12 max-h-12" />
        <h1 className="text-3xl font-bold mb-2">Competitive Edge</h1>
        <p className="text-sm text-gray-400">
          Showcasing skills and earning accolades on the competitive stages.
        </p>
      </div>
    </div>
  );
};

export default WorkshopCard;