import React from 'react'

const page = () => {
  return (
     <div className="flex flex-col items-center mb-4 mt-10">
 <img src = "/Line 6.png"></img>
 <div className=" w-[276px] h-[68px] flex items-center justify-center text-center text-white font-redRose text-[48px]">
  SCHEDULE
  </div>
  <div className="relative flex flex-col items-start p-4 text-white">
  {/* Day 1 Content */}
  <div className="flex flex-row items-start justify-center w-[1300px]">
    {/* Left Section: Day 1 */}
    <div className="flex justify-center items-center font-bold text-[64px] mr-6 w-[240px] h-[190px] ml-20">DAY 1</div>
    {/* Right Section: Details */}
    <div className = 'flex  w-[800px] h-[248px] flex-col px-100px '>
      <h1 className='text-[20px] ml-10'>Keynote on our SPEAKER (to be revealed soon)</h1>
        <ol className="list-decimal pl-6  text-[20px] w - [700px] ml-10">
        <li>Highly sought-after speaker in stock market investing</li>
        <li className='w-[660px]'>Lectured at universities, conferences, and investment seminars worldwide</li>
        <li>Known for clear explanations of complex financial concepts</li>
        <li>Offers practical insights into the stock market</li>
        <li>Widely recognized as an expert in the field</li>
      </ol>
    </div>
    
    <div className='w-[200px] flex items-end ml-24 flex-col'>
      <div className='bg-[#ADA0FF] w-[72px] h-[72px] rounded-[36px] flex items-center justify-center'> 
      <img src="/arrow-up-right.png"></img>
      </div>
      <div className='mt-16 w-[72px] h-[72px] rounded-[36px] flex items-center justify-center border-2 border-[#ADA0FF]'> 
      <img src="/arrow-up-right2.png"></img>
      </div>
    </div>     
   </div>
  </div>
  <img className='mb -4' src = "/Line 6.png"></img>
  <div className="relative flex flex-col items-start p-4 text-white">
  {/* Day 1 Content */}
  <div className="flex flex-row items-start justify-center w-[1300px]">
    {/* Left Section: Day 1 */}
    <div className="flex justify-center items-center font-bold text-[64px] mr-6 w-[240px] h-[190px] ml-20 mt-10">DAY 2</div>
    {/* Right Section: Details */}
    <div className = 'flex  w-[800px] h-[248px] flex-col px-100px '>
      
        <ol className="list-decimal pl-6  text-[20px] ml-10 mt-10">
        <li>Imagine a bustling trading room atmosphere, prices of stocks fluctuate on screens. An adrenaline-packed experience.</li>
        <li>Compete to build the most valuable portfolio</li>
        <li>Jobbers facilitate buyer-seller matches</li>
        <li>Constantly changing stock prices</li>
        <li>Utilize skills and knowledge to succeed</li>
      </ol>
    </div>
    
    <div className='w-[200px] flex items-end ml-24 flex-col mt-4'>
      <div className='w-[72px] h-[72px] rounded-[36px] flex items-center justify-center border-2 border-[#ADA0FF]'> 
      <img src="/arrow-up-right2.png"></img>
      </div>
      <div className='mt-20 w-[72px] h-[72px] rounded-[36px] flex items-center justify-center border-2 border-[#ADA0FF]'> 
      <img src="/arrow-up-right2.png"></img>
      </div>
    </div>     
   </div>
  </div>
  <img src = "/Line 6.png"></img>
  
 
</div>




  )
}

export default page
