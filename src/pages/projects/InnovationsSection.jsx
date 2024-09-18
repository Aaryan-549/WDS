import React from "react";
import one from "../assets/1.jpeg";

function InnovationsSection() {
  return (
    <>
      <h2 className="mt-10 ml-7 text-8xl font-bold text-orange-400 uppercase tracking-[2.03px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        <span className="font-bold nulshock text-[4vw] text-white">INNOVATIONS</span>.
      </h2>
      <section className="mt-10 ml-7 w-full max-w-[1086px] max-md:max-w-[270px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
            <div className="relative group">
            <img
              loading="lazy"
              src={one}
              alt=""
              className="object-contain grow w-full aspect-[1.03] max-md:mt-10"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-end p-8">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-4xl">
                Mandakini
              </span>
            </div>
          </div>
          </div>
          <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
            <h3 className="mt-14 text-[2.5vw] uppercase font-bold nulshock text-white leading-[50px] max-md:mt-10 max-md:max-w-full">
              Driving Progress through Cutting-Edge Innovations and Unleashing New Possibilities
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default InnovationsSection;