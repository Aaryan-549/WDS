import React from "react";
import logo from "../assets/mars_logo.png"

import instaIcon from "../assets/instagram.svg"
import gitIcon from "../assets/github.svg"
import linkedinIcon from "../assets/linkedIn.svg"

function JoinCommunity() {
  return (
    <section className="flex relative flex-col justify-center items-center px-20 py-10 font-bold text-white min-h-[328px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex relative flex-col items-center max-w-full w-[430px]">
        <img
          loading="lazy"
          src={logo}
          alt="Mechatronics & Robotics Society logo"
          className="object-contain aspect-square w-[72px]"
        />
        <h2 className="self-stretch mt-1.5 text-lg tracking-wide text-center uppercase max-md:max-w-full">
          mechatronics & Robotics society
        </h2>
        <p className="mt-3 text-sm font-medium tracking-wide text-center">
          Join our growing community of robotics enthusiasts.
          <br />
        </p>
        <button className="px-7 pt-3 pb-3 mt-5 max-w-full text-lg tracking-wide uppercase bg-orange-400 rounded-lg text-stone-950 w-[164px] max-md:px-5">
          JOIN NOW
        </button>
        <div className="grid grid-cols-3 gap-2 pt-5">
          <button class="w-[3em] h-[3em] rounded-full bg-black text-white flex items-center justify-center">
              <img src={instaIcon} />
            </button>
            <button class="w-[3em] h-[3em] rounded-full bg-black text-white flex items-center justify-center">
              <img src={gitIcon} />
            </button>
            <button class="w-[3em] h-[3em] rounded-full bg-black text-white flex items-center justify-center">
              <img src={linkedinIcon} />
            </button>
        </div>
      </div>
    </section>
  );
}

export default JoinCommunity;