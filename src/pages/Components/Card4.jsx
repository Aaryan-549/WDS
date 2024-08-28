import React from 'react';
import Vector from '../assets/Vector-2.png';

const WorkshopCard = () => {
  return (
    <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 text-white p-5 rounded-lg w-72 h-72 mx-auto flex flex-col justify-end items-start transition-transform transform hover:scale-105 hover:from-zinc-700 hover:to-zinc-800">
      <div className="mb-4">
        <img src={Vector} alt="Workshop Icon" className="mb-2 w-12 h-12" />
        <h1 className="text-2xl font-bold mb-2">Engaging Events</h1>
        <p className="text-sm text-gray-400">
          Join interactive events that inspire and ignite creativity.
        </p>
      </div>
    </div>
  );
};

export default WorkshopCard;
