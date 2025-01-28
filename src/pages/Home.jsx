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
      {/* Navbar */}
      <div className="absolute z-10">
        <Navbar />
      </div>

      {/* Landing Page */}
      <LandingPage />

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Stocks Section */}
      <Stocks />

      {/* Schedule Section */}
      <div id="schedule">
        <Schedule />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <FAQ />
        <button
  onClick={() => navigate('/register')}
  aria-label="Register for the event"
  className="mt- 0 ml-auto mr-auto block bg-black-500 text-white font-bold text-sm sm:text-base py-8 px-4 sm:py-3 sm:px-6 rounded hover:bg-#9e7aff-600 transition duration-300"
>
  Get IN
</button>
      </div>
    </>
  );
}

export default Home;
