import React from 'react'


function App() {
  return (
    <div className="w-full h-screen bg-black flex items-center flex-col">
      <div className="flex items-center justify-center  w-[396px] h-[76px] bg-[#ADA0FF]  rounded-[34px] text-center text-5xl mb-20 mt-28 font-bold font-redrose">ABOUT WDS</div>
      <div className="text-white flex">
        <div className="flex items-center flex-col w-[448px] h-[304px] mr-8"><img src="/Rectangle 36.png"></img><p className="text-[20px] mt-8 w-[342px] text-center font-redrose"> Wolf of dalal street started as an event aiming to develop an economical temperament amongst youngsters.</p></div>
        <div className="flex items-center flex-col w-[448px] h-[304px] mr-8"><img src="/Rectangle 37.png"></img><p className="text-[20px] mt-8 w-[464px] text-center font-redrose">WDS is a 2-day event opening with an exciting and interactive speaker session with an Eminent personality from the Financial world providing our attendees with invaluable insights to expand their financial wisdom.</p></div>
        <div className="flex items-center flex-col w-[448px] h-[304px]"><img src="/Rectangle 38.png"></img><p className="text-[20px] mt-8 w-[420px] text-center font-redrose">On day 2, our Main Event - The Wolf of Dalal Street depicts realistic scenarios of the world of stock market. Each team participating will have its own portfolio depiciting its performance which each trade made. </p></div>
      </div>
    </div>
  );
}

export default App 