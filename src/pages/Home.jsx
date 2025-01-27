import React from 'react';
import Navbar from './Components/Navbar';
import FAQ from './Components/FAQ';
import LandingPage from './Components/LandingPage';
import About from './Components/About';
import Schedule from './Components/schedule';
import Stocks from './Components/Stocks';
import StockTracker from './Components/StockTracker';

function Home() {
  return (
    <>
     {/*
      {/* Ensure the root container takes up the full viewport */}
      
        
        {/* Navbar */}
        <div className='absolute z-10'>
          <Navbar />
        </div>

        {/* Centered text over everything */}
        <LandingPage />
      
       
      

      <About />
      <Stocks />
      
      <Schedule />

 
      {/* Add the FAQ section after the main content */}
      <FAQ /> 
         {/* Place FAQ component here */}
      
    </>
  );
}

export default Home;
