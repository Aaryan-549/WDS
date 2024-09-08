import React from "react";
import ContentDiv from "./ContentDiv";

function Content({ category }) {
  const contentData = [
    { title: "Basics of Arduino", content: "Arduino is an open-source platform widely recognized for its role in facilitating electronic prototyping. It serves as a versatile microcontroller, empowering users to transform their innovative concepts into tangible realities..", image: "./Blogs/blog1.png"},
    { title: "Introduction to Raspberry PI ", content: "The Raspberry Pi is a compact, single-board computer renowned for its versatility and affordability.  it has evolved into a powerful platform for a wide range of applications. " , image: "./Blogs/blog2.png" },
    { title: "Introduction to Open CV ", content: "Computer vision is a dynamic field that, at the intersection of computer science and artificial intelligence, empowers machines to interpret and understand visual information from the world around them. It involves the development of algorithms and techniques that enable computers to accurately identify, track, and analyze objects, scenes, and patterns within images and videos." , image: "./Blogs/blog3.png"},
    { title: "A Brief About Servo Motors", content: "Servo motors are essentially smart motors that can be precisely controlled to move to specific positions. They incorporate a built-in feedback mechanism that allows them to constantly monitor and adjust their position. This precision makes them ideal for applications ranging from robotics and RC toys to industrial automation.." , image: "./Blogs/blog4.png"},
    { title: "Basics of Ultrasonic", content: "Ultrasonics involves high-frequency sound waves used to measure distance and detect objects. In robotics and mechatronics, ultrasonic sensors provide essential data for navigation, obstacle avoidance, and object recognition, enabling machines to interact intelligently with their environment ", image: "./Blogs/blog5.png" },
    // Add more items as needed
  ];

  return (
    <div className="flex justify-center align-center mt-[10em]">
      <div className="w-[75vw] bg-black text-white">
        {contentData.map((item, index) => (
          <ContentDiv
            key={index}
            title={item.title}
            content={item.content}
            mainimage={item.image}  // Fixed image for all items
          />
        ))}
      </div>
    </div>
  );
}

export default Content;