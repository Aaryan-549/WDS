import React from "react";
import logo from "./assets/mars_logo.png"

function JoinCommunity() {
  return (
      <section className="font-bold text-white w-1/2 mx-auto mt-11">

      <div className="flex relative flex-col items-center max-w-full w-[430px]">
        <img
          loading="lazy"
          src={logo}
          alt="Mechatronics & Robotics Society logo"
          className="object-contain aspect-square w-[72px]"
        />
        <h2 className="self-stretch text-lg tracking-wide text-center uppercase max-md:max-w-full">
          mechatronics & Robotics society
        </h2>
        <p className="mt-3 text-sm font-medium tracking-wide text-center">
          Join our growing community of robotics enthusiasts.
        </p>
        <button className="px-7 pt-3 pb-5 mt-5 max-w-full text-lg tracking-wide uppercase bg-orange-400 rounded-lg text-stone-950 w-[164px] max-md:px-5">
          JOIN NOW
        </button>
        <div className="grid grid-cols-3 gap-2 pt-5">
          <button class="w-[3em] h-[3em] rounded-full bg-orange-600 text-white flex items-center justify-center">
            B1
          </button>
          <button class="w-[3em] h-[3em] rounded-full bg-orange-600 text-white flex items-center justify-center">
            B2
          </button>
          <button class="w-[3em] h-[3em] rounded-full bg-orange-600 text-white flex items-center justify-center">
            B3
          </button>
        </div>
      </div>
    </section>
  );
}

export default JoinCommunity;