import React from 'react'

const ContentDiv = ({title, content, mainimage}) => {
  return (
    <div className='flex flex-col md:flex-row gap-5 md:gap-10 h-auto md:h-[30vh] mb-10'>
      <img 
        src={mainimage || './1.jpeg'} 
        alt="" 
        className='w-full md:w-[20vw] object-cover h-[30vh] md:h-auto'
      />
      <div className="flex justify-center items-center w-full flex-col bg-[#0c0c0c] p-4">
        <div className="flex justify-between w-full">
          <h1 className='text-lg md:text-2xl font-bold'>{title}</h1>
          <div className="svg cursor-pointer -mt-4 md:-mt-14">
            <svg width="68" height="56" viewBox="0 0 68 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.208984" width="67.7895" height="56" fill="#FE6E3A"/>
              <path d="M52.1451 10.5725C53.8943 10.6934 55.2144 12.2095 55.0935 13.9587L53.123 42.4648C53.0021 44.2141 51.486 45.5341 49.7367 45.4132C47.9875 45.2923 46.6674 43.7762 46.7883 42.0269L48.5398 16.6882L23.2011 14.9367C21.4518 14.8158 20.1318 13.2997 20.2527 11.5504C20.3736 9.80115 21.8897 8.4811 23.639 8.60202L52.1451 10.5725ZM16.0328 40.7821L49.8413 11.3453L54.011 16.1343L20.2025 45.571L16.0328 40.7821Z" fill="#121212"/>
            </svg>
          </div>
        </div>
        <p className='mt-3 md:mt-5 text-sm md:text-base text-left'>{content}</p>
      </div>
    </div>
  )
}

export default ContentDiv;