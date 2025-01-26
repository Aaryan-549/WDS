import React from 'react'

const page = () => {
  return (
     <div className="flex flex-col items-center mb-4 mt-10">
 <div className="  flex items-center justify-center text-center text-white Red-Rose text-5xl font-bold">
  SCHEDULE
  </div>
  <div className="w-[80%] h-[2px] bg-[#8E7CFF] mt-4"></div>
  <div className="relative flex flex-col items-start p-4 text-white">
  {/* Day 1 Content */}
  <div className="flex flex-row items-start justify-center w-[1300px]">
    {/* Left Section: Day 1 */}
    <div className="flex justify-center items-center font-bold text-[64px] mr-2 w-[240px] h-[190px] ml-24 Red-Rose mt-10">DAY 1</div>
    {/* Right Section: Details */}
    <div className = 'flex flex-col Red-Rose mt-10'>
      <h1 className='text-[20px] pl-6 ml-10'>Keynote on our SPEAKER (to be revealed soon)</h1>
        <ol className="list-decimal pl-6  text-[20px] w - [700px] ml-10">
        <p>1.Highly sought-after speaker in stock market investing</p>
        <p className='w-[660px]'>2.Lectured at universities, conferences, and investment seminars worldwide</p>
        <p>3.Known for clear explanations of complex financial concepts</p>
        <p>4.Offers practical insights into the stock market</p>
        <p>5.Widely recognized as an expert in the field</p>
      </ol>
    </div>
    
    <div className='w-[200px] flex items-end ml-24 flex-col'>
      
      
    </div>     
   </div>
  </div>
  <div className="w-[80%] h-[2px] bg-[#8E7CFF] mt-4"></div>
 
  <div className="relative flex flex-col items-start p-4 text-white">
  {/* Day 1 Content */}
  <div className="flex flex-row items-start justify-center w-[1300px]">
    {/* Left Section: Day 1 */}
    <div className="flex justify-center items-center font-bold text-[64px] mr-6 w-[240px] h-[190px] ml-20 mt-10 Red-Rose">DAY 2</div>
    {/* Right Section: Details */}
    <div className = 'flex  w-[800px] h-[248px] flex-col px-100px Red-Rose'>
      
        <ol className="list-decimal pl-2  text-[20px] ml-10 mt-10">
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
