import React from 'react';


const QueryForm = () => {
  return (
    <div className="flex items-center justify-center font-poppins text-xs py-10 sm:bg-cover bg-center bg-no-repeat md:w-full bg-hidden md:bg-none md:text-sm" >
      <form className="bg-[#0D0D0D] p-8 rounded-lg shadow-lg w-60 md:w-full max-w-lg">
        
        <div className="mb-6">
          <label className="block text-white text-xs font-medium mb-2 md:text-base" htmlFor="fullName">
            Full Name
          </label>
          <input 
            id="fullName" 
            type="text" 
            placeholder="Enter your name" 
            className="w-full p-3 bg-[#1E1E1E] text-white border border-gray-600 rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white text-xs font-medium mb-2 md:text-base" htmlFor="email">
            Email address
          </label>
          <input 
            id="email" 
            type="email" 
            placeholder="Enter your email" 
            className="w-full p-3 bg-[#1E1E1E] text-white border border-gray-600 rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white text-xs font-medium mb-2 md:text-base" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input 
            id="phoneNumber" 
            type="tel" 
            placeholder="Enter your phone number" 
            className="w-full p-3 bg-[#1E1E1E] text-white border border-gray-600 rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white text-xs font-medium mb-2 md:text-base" htmlFor="query">
            Your Query
          </label>
          <textarea 
            id="query" 
            placeholder="Enter your query" 
            className="w-full p-3 bg-[#1E1E1E] text-white border border-gray-600 rounded h-24"
          />
        </div>

        <button 
          type="submit" 
          className="w-32 h-11 mt-5 bg-orange-500 text-black text-lg font-bold rounded hover:bg-orange-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default QueryForm;
