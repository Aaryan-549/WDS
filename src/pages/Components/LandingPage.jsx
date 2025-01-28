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
    <div className="relative w-screen h-screen flex items-center justify-center">
      <div className="text-center px-4  ">
        <div className=" Hahmlet font-semibold text-8xl text-custom-blue whitespace-normal translate-y-[85%]">
          WOLF OF DALAL STREET
        </div>
        <div className=" relative flex items-center justify-center translate-y-[180%]">
          <div className="Red-Rose  text-5xl text-custom-blue px-6 py-2 border-4 border-custom-blue rounded-full">
            <button
              onClick={() => navigate('/register')}
              aria-label="Register for the event"
              className="transition duration-300"
            >
              Register
            </button>
          </div>
        </div>
        {/* Countdown Timer */}
        <div className=" translate-y-[100%] flex justify-center space-x-4 text-9xl font-medium Red-Rose">
          <div className="w-[14%] h-[14%] flex items-center justify-center border-4 border-custom-blue rounded-lg">
            <div>
              <div>{timeLeft.days}</div>
              <div className="text-xl mb-2">Days</div>
            </div>
          </div>
          <div className="w-[14%] h-[14%] flex items-center justify-center border-4 border-custom-blue rounded-lg">
            <div>
              <div>{timeLeft.hours}</div>
              <div className="text-xl mb-2">Hours</div>
            </div>
          </div>
          <div className="w-[14%] h-[14%] flex items-center justify-center border-4 border-custom-blue rounded-lg">
            <div>
              <div>{timeLeft.minutes}</div>
              <div className="text-xl mb-2">Minutes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
