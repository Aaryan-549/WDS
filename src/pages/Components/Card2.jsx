import React from 'react';
import Vector from '../assets/Group.png';

const WorkshopCard = () => {
  return (
    <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 text-white p-5 rounded-lg w-72 h-72 mx-auto flex flex-col justify-end items-start transition-transform transform hover:scale-105 hover:from-zinc-700 hover:to-zinc-800">
      <div className="mb-4">
        <img src={Vector} alt="Workshop Icon" className="mb-2 w-10 h-10" />
        <h1 className="text-2xl font-bold mb-2">Competitive Edge</h1>
        <p className="text-sm text-gray-400">
          Showcasing skills and earning accolades on the competitive stages.
        </p>
      </div>
    </div>
  );
};

export default WorkshopCard;
