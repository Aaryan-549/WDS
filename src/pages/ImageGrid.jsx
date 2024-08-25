import React from "react";
import two from "./assets/2.png";
import three from "./assets/3.png";
import four from "./assets/4.png";
import five from "./assets/5.png";
import six from "./assets/6.png"


function ImageGrid() {
    const images = [
        { src: two, width: "33%", aspect: "1.03" },
        { src: three, width: "42%", aspect: "1.3" },
        { src: four, width: "3/12", aspect: "0.76", maxWidth: "265px" },
        { src: five, width: "6/12", aspect: "1.03" },
        { src: six, width: "6/12", aspect: "1.03" },
      ];

  return (
    <>
      <div className="mt-10 ml-7 w-full max-w-[1120px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {images.slice(0, 3).map((image, index) => (
            <div key={index} className={`flex flex-col w-[${image.width}] max-md:ml-0 max-md:w-full`}>
              <img
                loading="lazy"
                src={image.src}
                alt=""
                className={`object-contain grow w-full aspect-[${image.aspect}] max-md:mt-5 ${
                  image.maxWidth ? `max-w-[${image.maxWidth}]` : "max-md:max-w-full"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="self-center mt-10 max-w-full w-[740px]">
        <div className="flex gap-5 max-md:flex-col">
          {images.slice(3).map((image, index) => (
            <div key={index} className={`flex flex-col w-${image.width} max-md:ml-0 max-md:w-full`}>
              <img
                loading="lazy"
                src={image.src}
                alt=""
                className={`object-contain grow w-full aspect-[${image.aspect}] max-md:mt-5`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageGrid;