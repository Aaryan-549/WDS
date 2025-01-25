import React from 'react';
import Navbar from './Components/Navbar';
import FAQ from './Components/FAQ';
import LandingPage from './Components/LandingPage';
import About from './Components/About';

function Home() {
  return (
    <>
      {/* Ensure the root container takes up the full viewport */}
      <div className='relative bg-black h-screen w-screen '>
        
        {/* Navbar */}
        <div className='absolute z-10'>
          <Navbar />
        </div>

        {/* Centered text over everything */}
        <LandingPage />
      
       
      </div>

      {/* Add the FAQ section after the main content */}
      <FAQ />  {/* Place FAQ component here */}

    </>
  );
}

export default Home;
