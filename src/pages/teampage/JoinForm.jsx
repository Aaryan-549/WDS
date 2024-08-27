import React from 'react';

const JoinForm = () => {
  return (
    <div className="flex items-center justify-center mt-40 font-poppins py-10 md:w-full">
      <form className="bg-[#0D0D0D] p-8 rounded-lg shadow-lg w-80 md:w-full max-w-lg">
        
        <div className="mb-6">
          <label className="block text-white text-lg font-medium mb-2" htmlFor="fullName">
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
          <label className="block text-white text-lg font-medium mb-2" htmlFor="rollNumber">
            Roll Number
          </label>
          <input 
            id="rollNumber" 
            type="text" 
            placeholder="Enter your roll number" 
            className="w-full p-3 bg-[#1E1E1E] text-white border border-gray-600 rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white text-lg font-medium mb-2" htmlFor="email">
            Email address (@thapar.edu)
          </label>
          <input 
            id="email" 
            type="email" 
            placeholder="Enter your email" 
            className="w-full p-3 bg-[#1E1E1E] text-white border border-gray-600 rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white text-lg font-medium mb-2" htmlFor="phoneNumber">
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
          <label className="block text-white text-lg font-medium mb-2" htmlFor="department">
            Department
          </label>
          <input 
            id="department" 
            type="text" 
            placeholder="Select the Department you want to apply" 
            className="w-full p-3 bg-[#1E1E1E] text-white border border-gray-600 rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white text-lg font-medium mb-2" htmlFor="branch">
            Branch
          </label>
          <input 
            id="branch" 
            type="text" 
            placeholder="Enter your Branch" 
            className="w-full p-3 bg-[#1E1E1E] text-white border border-gray-600 rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white text-lg font-medium mb-2" htmlFor="yearOfGraduation">
            Year of Graduation
          </label>
          <select 
            id="yearOfGraduation" 
            className="w-full p-3 bg-[#1E1E1E] text-white border border-gray-600 rounded"
          >
            <option value="">Select Year</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
          </select>
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

export default JoinForm;
