import React from 'react';
import { useNavigate} from 'react-router-dom'
import Navbar from './Components/Navbar';
import FAQ from './Components/FAQ';
import LandingPage from './Components/LandingPage';
import About from './Components/About';
import Schedule from './Components/schedule';
import Stocks from './Components/Stocks';
import StockTracker from './Components/StockTracker';

function Home() {
  const navigate = useNavigate();
  return (
    <>
     {/*
      {/* Ensure the root container takes up the full viewport */}
      <div className='relative bg-black h-screen w-screen '>
        
        {/* Navbar */}
        <div className='absolute z-10'>
          <Navbar />
          <button
  onClick={() => navigate('/register')}
  aria-label="Register for the event"
  className="mt- 0 ml-auto mr-auto block bg-black-500 text-white font-bold text-sm sm:text-base py-8 px-4 sm:py-3 sm:px-6 rounded hover:bg-black-600 transition duration-300"
>
  Get IN
</button>


        </div>

        {/* Centered text over everything */}
        <LandingPage />
      
       
      </div>

      <About />
      <Stocks />
      <div className='bg-gray-100 py-10'>
        <h2 className='text-2xl font-bold text-center mb-6'>
          Stock Performance Tracker
        </h2>
        <div className='px-4'>
          <StockTracker />
        </div>
      </div>
      
      <Schedule />
      

 
      {/* Add the FAQ section after the main content */}
      <FAQ /> 
         {/* Place FAQ component here */}
      
    </>
  );
}

export default Home;
