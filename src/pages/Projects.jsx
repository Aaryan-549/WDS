import React from "react";
import ImageGrid from "./ImageGrid";
import InnovationsSection from "./InnovationsSection";
import JoinCommunity from "./JoinCommunity";
import header from "./assets/header.png";

function Projects() {
  return (
    <div className="flex overflow-hidden flex-col bg-stone-950">
        <div className="h-12 m-0">
          <img src={header} />
        </div>
      <div className="flex flex-col items-start self-end w-full max-w-[1312px] max-md:max-w-full">
        <InnovationsSection />
        <ImageGrid />
        <JoinCommunity />
      </div>
    </div>
  );
}

export default Projects;