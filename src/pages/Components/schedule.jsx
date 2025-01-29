import React from 'react'

const page = () => {
  return (
     <div className="flex flex-col items-center mb-4 mt-10">
 <div className="  flex items-center justify-center text-center text-white Red-Rose text-5xl font-bold">
  SCHEDULE
  </div>
  <div className="w-[80%] h-[2px] bg-[#8E7CFF] mt-4"></div>
  <div className="relative flex flex-col items-start p-4 text-white translate-x-[2%]">
  {/* Day 1 Content */}
  <div className="flex flex-row items-start justify-center w-screen">
    {/* Left Section: Day 1 */}
    <div className="flex justify-center items-center font-bold text-6xl mr-6 w-[15rem] h-[190px] ml-20 mt-10 Red-Rose">DAY 1</div>
    {/* Right Section: Details */}
    <div className = 'flex w-[40rem] h-auto flex-col Red-Rose mt-10'>
      <h1 className='text-md pl-[6%]  text-md w-[30rem] ml-10'>Keynote on our SPEAKER (to be revealed soon)</h1>
        <ol className="list-decimal pl-[6%]  text-md w-[30rem] ml-10">
        <p>1.Highly sought-after speaker in stock market investing</p>
        <p className='w-[660px]'>2.Lectured at universities, conferences, and investment seminars worldwide</p>
        <p>3.Known for clear explanations of complex financial concepts</p>
        <p>4.Offers practical insights into the stock market</p>
        <p>5.Widely recognized as an expert in the field</p>
      </ol>
    </div>
    
    <div className='w-[15rem] flex items-end ml-24 flex-col'>
      
      
    </div>     
   </div>
  </div>
  <div className="w-[80%] h-[2px] bg-[#8E7CFF] mt-4"></div>
 
  <div className="relative flex flex-col items-start p-4 text-white ">
  {/* Day 1 Content */}
  <div className="flex flex-row items-start justify-center w-screen">
    {/* Left Section: Day 1 */}
    <div className="flex justify-center items-center font-bold text-6xl mr-6 w-[15rem] h-[190px] ml-20 mt-10 Red-Rose">DAY 2</div>
    {/* Right Section: Details */}
    <div className = 'flex  w-[40rem] h-auto flex-col  Red-Rose'>
      
        <ol className="list-decimal pl-2  text-md ml-10 mt-10">
        <p>1.Imagine a bustling trading room atmosphere, prices of stocks fluctuate on screens. An adrenaline-packed experience.</p>
        <p>2.Compete to build the most valuable portfolio</p>
        <p>3.Jobbers facilitate buyer-seller matches</p>
        <p>4.Constantly changing stock prices</p>
        <p>5.Utilize skills and knowledge to succeed</p>
      </ol>
    </div>
    
    <div className='w-[200px] flex items-end ml-24 flex-col mt-4'>

      
    </div>     
   </div>
  </div>
  <div className="w-[80%] h-[2px] bg-[#8E7CFF] mt-4"></div>
  
 
</div>




  )
}

export default page
