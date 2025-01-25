import React from 'react';
import Register from '../assets/Register.png';

function LandingPage() {
  return (
    <div className='relative w-screen h-screen flex items-center justify-center'>
      <div className='text-center px-4'>
        <div className='translate-y-[90%] Hahmlet font-semibold text-8xl text-custom-blue whitespace-normal'>
          WOLF OF DALAL STREET
        </div>
        <img src={Register} alt='register' className='translate-y-[90%] mt-8 w-1/2 h-auto mx-auto' />
      </div>
    </div>
  );
}

export default LandingPage;
