import React from 'react';
import Navbar from './Components/Navbar';
import FAQ from './Components/FAQ';

function Home() {
  return (
    <>
      {/* Ensure the root container takes up the full viewport */}
      <div className='relative bg-black h-screen w-screen overflow-hidden'>
        
        {/* Navbar */}
        <div className='absolute top-0 left-0 w-full z-10'>
          <Navbar />
        </div>

        {/* Centered text over everything */}
        <div className='absolute inset-0 flex items-center justify-center z-20'>
          <div className='Hahmlet font-semibold text-8xl text-custom-blue text-center'>
            WOLF OF DALAL STREET
          </div>
        </div>
      </div>

      {/* Add the FAQ section after the main content */}
      <FAQ />  {/* Place FAQ component here */}

    </>
  );
}

export default Home;
