import React from 'react'
import Image from '../assets/image.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


function App() {
  return (
    <div>
      <div className='hidden md:block'>
    <div className="w-full h-screen bg-black flex items-center flex-col">
      <div className="flex items-center justify-center w-[18rem] h-[4rem] md:w-[22rem] md:h-[4rem] bg-[#ADA0FF] rounded-[34px] text-center text-4xl md:text-5xl mb-20 mt-28 Red-Rose text-black font-extrabold drop-shadow-2xl">ABOUT WDS</div>
      <div className="text-white flex">
      <div className="flex items-center flex-col mr-8">
  <img src={Image} alt="WDS description 1" className="w-[80%] h-auto" />
  <p className="text-md mt-8 w-[70%] text-center Red-Rose">
    Wolf of Dalal Street started as an event aiming to develop an economical temperament amongst youngsters.
  </p>
</div>
<div className="flex items-center flex-col mr-8">
  <img src={Image} alt="WDS description 1" className="w-[80%] h-auto" />
  <p className="text-md mt-8 w-[70%] text-center Red-Rose">
  WDS is a 2-day event opening with an exciting and interactive speaker session with an Eminent personality from the Financial world providing our attendees with invaluable insights to expand their financial wisdom.</p>
</div>
<div className="flex items-center flex-col mr-8">
  <img src={Image} alt="WDS description 1" className="w-[80%] h-auto" />
  <p className="text-md mt-8 w-[70%] text-center Red-Rose">
  On day 2, our Main Event - The Wolf of Dalal Street depicts realistic scenarios of the world of stock market. Each team participating will have its own portfolio depiciting its performance which each trade made.
  </p>
</div>
       
      </div>
      
    </div>
    </div>
    <div className='md:hidden'>
    <div className="w-full h-full bg-black flex items-center flex-col mb-[8%]">
      <div className="flex items-center justify-center w-[18rem] h-[4rem] md:w-[22rem] md:h-[4rem] bg-[#ADA0FF] rounded-[34px] text-center text-4xl md:text-5xl mb-20 mt-28 Red-Rose text-black font-extrabold drop-shadow-2xl">
        ABOUT WDS
      </div>
      <div className="text-white w-full max-w-lg">
        <Swiper spaceBetween={50} slidesPerView={1}>
          <SwiperSlide>
            <div className="flex items-center flex-col">
              <img src={Image} alt="WDS description 1" className="w-[80%] h-auto" />
              <p className="text-md mt-[6%] w-[70%] text-center Red-Rose">
              Wolf of Dalal Street began as an event designed to cultivate an economical mindset among young individuals, offering them a platform to engage with financial topics, explore investment opportunities, and develop the skills needed to make informed financial decisions.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center flex-col">
              <img src={Image} alt="WDS description 2" className="w-[80%] h-auto" />
              <p className="text-md mt-[6%] w-[70%] text-center Red-Rose">
                WDS is a 2-day event opening with an exciting and interactive speaker session with an Eminent personality from the Financial world providing our attendees with invaluable insights to expand their financial wisdom.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center flex-col">
              <img src={Image} alt="WDS description 3" className="w-[80%] h-auto" />
              <p className="text-md mt-[6%] w-[70%] text-center Red-Rose">
                On day 2, our Main Event - The Wolf of Dalal Street depicts realistic scenarios of the world of stock market. Each team participating will have its own portfolio depicting its performance with each trade made.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    </div>
    </div>
  );
}

export default App
