import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  // State to store the time left
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const targetDate = new Date('February 8, 2025 17:00:00'); // Target date and time

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);

        setTimeLeft({ days, hours, minutes });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
      <div className="text-center px-4">
        {/* Adjusted heading positioning with responsive margin */}
        <div className="translate-y-[40%] flex justify-center Hahmlet font-semibold text-4xl sm:text-6xl md:text-7xl text-custom-blue whitespace-normal md:mt-20 mt-30">
          WOLF OF DALAL STREET
        </div>

        <div className="relative flex items-center justify-center mt-10 mb-10">
          <div className="relative inline-flex items-center justify-center px-6 py-2 border-4 border-custom-blue rounded-full transition-all duration-300 overflow-hidden bg-transparent before:absolute before:inset-0 before:scale-0 before:bg-custom-blue before:transition-all before:duration-300 hover:before:scale-100">
            <button
              onClick={() => navigate('/register')}
              aria-label="Register for the event"
              className="relative text-xl sm:text-3xl md:text-4xl font-semibold text-custom-blue transition-all duration-300 ease-in-out z-10 hover:text-white"
            >
              Register
            </button>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="translate-y-[40%] flex justify-center space-x-4 text-7xl md:text-8xl font-medium Red-Rose">
          <div className="w-1/3 sm:w-[14%] flex items-center justify-center border-4 border-custom-blue rounded-lg mb-4 sm:mb-0">
            <div>
              <div>{timeLeft.days}</div>
              <div className="text-xs sm:text-xl md:text-xl mb-2">Days</div>
            </div>
          </div>
          <div className="w-1/3 sm:w-[14%] flex items-center justify-center border-4 border-custom-blue rounded-lg mb-4 sm:mb-0">
            <div>
              <div>{timeLeft.hours}</div>
              <div className="text-xs sm:text-xl md:text-xl mb-2">Hours</div>
            </div>
          </div>
          <div className="w-1/3 sm:w-[14%] flex items-center justify-center border-4 border-custom-blue rounded-lg mb-4 sm:mb-0">
            <div>
              <div>{timeLeft.minutes}</div>
              <div className="text-xs sm:text-xl md:text-xl mb-2">Minutes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
