import React from "react";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";

function ImageGrid() {
  const images = [
    { src: two, width: "w-1/3", aspect: "1.03", content: "Robomuse" },
    { src: three, width: "w-5/12", aspect: "1.3", content: "Bhagirathi" },
    { src: four, width: "w-3/12", aspect: "0.76", maxWidth: "265px", content: "MARVIN" },
    { src: five, width: "w-6/12", aspect: "1.03", content: "Autonomous Surveillance Robot" },
    { src: six, width: "w-6/12", aspect: "1.03", content: "7 DOF Robotic Arm" },
  ];

  return (
    <>
      <div className="mt-10 p-7 flex justify-center items-center lg:ml-7 w-full max-w-[1120px] mx-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {images.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className={`relative group flex flex-col ${image.width} max-md:w-full`}
            >
              <img
                loading="lazy"
                src={image.src}
                alt=""
                className={`object-contain w-full aspect-[${image.aspect}] max-md:mt-5 ${
                  image.maxWidth ? `max-w-[${image.maxWidth}]` : "max-md:max-w-full"
                }`}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-end p-8">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-4xl">
                  {image.content}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 p-7 flex justify-center items-center w-full max-w-[740px] mx-auto">
        <div className="flex gap-5 max-md:flex-col">
          {images.slice(3).map((image, index) => (
            <div
              key={index}
              className={`relative group flex flex-col ${image.width} max-md:w-full`}
            >
              <img
                loading="lazy"
                src={image.src}
                alt=""
                className={`object-contain w-full aspect-[${image.aspect}] max-md:mt-5`}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-end p-8">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-4xl">
                  {image.content}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageGrid;