import React from "react";
import ImageGrid from "./projects/ImageGrid";
import InnovationsSection from "./projects/InnovationsSection";
import JoinCommunity from "./Components/JoinCommunity";
import Header from "./Components/Header";
import Nav from "./Components/Nav";

function Projects() {
  return (
    <>
    <Nav />
      <div className="flex overflow-hidden flex-col bg-stone-950">
        
        <Header line1="DISCOVER WHAT" line2="WE'RE CREATING"/>
        <div className="flex flex-col items-start self-end w-full max-w-[1312px] max-md:max-w-full">
          <InnovationsSection />
          <ImageGrid />
        </div>
        <JoinCommunity />

      </div>
      </>
  );
}

export default Projects;