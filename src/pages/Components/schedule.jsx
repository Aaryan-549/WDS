import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col items-center mb-4 mt-10 px-4">
      {/* Title */}
      <div className="flex items-center justify-center text-center text-white Red-Rose text-3xl md:text-5xl font-bold">
        SCHEDULE
      </div>

      {/* Divider */}
      <div className="w-full md:w-[80%] h-[2px] bg-[#8E7CFF] mt-4"></div>

      {/* Day 1 Content */}
      <div className="relative flex flex-col items-start p-4 text-white w-full">
        <div className="flex flex-col md:flex-row items-start justify-center w-full md:w-screen">
          {/* Left Section: Day 1 */}
          <div className="flex justify-center items-center font-bold text-4xl md:text-6xl w-full md:w-[15rem] h-auto md:h-[190px] Red-Rose mt-10">
            DAY 1
          </div>

          {/* Right Section: Details */}
          <div className="flex flex-col Red-Rose mt-4 md:mt-10 w-full md:w-[40rem]">
            <h1 className="text-md md:text-lg text-center md:text-left w-full px-2 md:px-6">
              Keynote on our SPEAKER (to be revealed soon)
            </h1>
            <ol className="list-decimal text-md md:text-lg w-full px-4 md:px-10 space-y-2">
              <li>Highly sought-after speaker in stock market investing</li>
              <li>Lectured at universities, conferences, and investment seminars worldwide</li>
              <li>Known for clear explanations of complex financial concepts</li>
              <li>Offers practical insights into the stock market</li>
              <li>Widely recognized as an expert in the field</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full md:w-[80%] h-[2px] bg-[#8E7CFF] mt-4"></div>

      {/* Day 2 Content */}
      <div className="relative flex flex-col items-start p-4 text-white w-full">
        <div className="flex flex-col md:flex-row items-start justify-center w-full md:w-screen">
          {/* Left Section: Day 2 */}
          <div className="flex justify-center items-center font-bold text-4xl md:text-6xl w-full md:w-[15rem] h-auto md:h-[190px] Red-Rose mt-10">
            DAY 2
          </div>

          {/* Right Section: Details */}
          <div className="flex flex-col Red-Rose mt-4 md:mt-10 w-full md:w-[40rem]">
            <ol className="list-decimal text-md md:text-lg w-full px-4 md:px-10 space-y-2">
              <li>Imagine a bustling trading room atmosphere, prices of stocks fluctuate on screens. An adrenaline-packed experience.</li>
              <li>Compete to build the most valuable portfolio</li>
              <li>Jobbers facilitate buyer-seller matches</li>
              <li>Constantly changing stock prices</li>
              <li>Utilize skills and knowledge to succeed</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full md:w-[80%] h-[2px] bg-[#8E7CFF] mt-4"></div>
    </div>
  );
};

export default Page;
