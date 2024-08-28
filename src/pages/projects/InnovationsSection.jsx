import React from "react";
import one from "../assets/1.jpeg";

function InnovationsSection() {
  return (
    <>
      <h2 className="mt-10 ml-7 text-8xl font-bold text-orange-400 uppercase tracking-[2.03px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        <span className="font-bold nulshock text-[4vw] text-white">INNOVATIONS</span>.
      </h2>
      <section className="mt-10 ml-7 w-full max-w-[1086px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={one}
              alt=""
              className="object-contain grow w-full aspect-[1.03] max-md:mt-10"
            />
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