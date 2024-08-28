import React from "react";
import CategoryButton from "./blog/CategoryButton";
import JoinCommunity from "./Components/JoinCommunity";
import Content from "./blog/Content";
import Header from "./Components/Header";
import Nav from "./Components/Nav";

const categories = ["Latest", "Mechanics", "Projects", "Technology"];

function Blog() {
  return (
    <>
    <Nav />
    <main className="flex overflow-hidden flex-col pb-3 bg-stone-950">
      < Header line1="DIVE INTO THE" line2="LATEST INSIGHTS"/>
      <section className="flex flex-col items-start self-end w-full max-w-[1316px] max-md:max-w-full">
        <h1 className="font-bold nulshock mt-20 ml-11 text-[4vw] tracking-widest text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          FRESH READS<span className="text-orange-400">.</span>
        </h1>
        <div className="flex flex-wrap gap-2 mt-7 ml-9 max-w-full text-[1.5vw] font-medium font-poppins tracking-wide text-orange-400 whitespace-nowrap">
          {categories.map((category, index) => (
            <CategoryButton key={index} category={category} />
          ))}
        </div>
      </section>
      <Content />
      <JoinCommunity />
    </main>
    </>
  );
}

export default Blog;