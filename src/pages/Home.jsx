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
      <div id="about" className=''>
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
        
      </div>
    </>
  );
}

export default Home;
