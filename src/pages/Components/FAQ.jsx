import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./FAQ.css";

export default function FAQ() {
  const faqBoxesWrapper = useRef(null);

  const scrollLeft = () => {
    faqBoxesWrapper.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    faqBoxesWrapper.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="faq-container">
      <h1 className="faq-heading">FAQ</h1>
      <div className="faq-boxes-wrapper" ref={faqBoxesWrapper}>
        <div className="faq-boxes">
          <div className="faq-box">
            <h3>Who can participate in the event?</h3>
            <p>Everyone who is a student of Thapar Institute can participate.</p>
          </div>
          <div className="faq-box">
            <h3>What is "The Wolf of Dalal Street" event?</h3>
            <p>
              WDS: The Wolf of Dalal Street!! The grandeur event of ECON CLUB
              which encompasses the glimpse of Dalal Street where the virtual
              trading takes place on hand.
            </p>
          </div>
          <div className="faq-box">
            <h3>Is there any registration fee?</h3>
            <p>
            No, the event is free for all students of TIET.
            </p>
          </div>
          <div className="faq-box">
            <h3>When and where is the event taking place?</h3>
            <p>TAN audi on 5th November</p>
          </div>
        </div>
      </div>
      <div className="faq-arrows">
        <button className="arrow-button" onClick={scrollLeft}>
          <ChevronLeft />
        </button>
        <button className="arrow-button active" onClick={scrollRight}>
          <ChevronRight />
        </button>
      </div>
      <div className="faq-contact-section">
        <div id="2">
          <h2 className="faq-contact-heading">HAVE ANY QUERIES?</h2>
        </div>
        <div id="1">
          <div className="faq-contact-details">
            <div className="contact-item">
              <p className="label">Mail us:</p>
              <p>econclub@thapar.edu</p>
            </div>
            <div className="contact-item">
              <p className="label">Contact us:</p>
              <p>+91 78781 83180 / +91 99063 84166</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="faq-footer">
        <p>
          Copyright ©ECON CLUB TIET | All Rights Reserved | Developed by the
          ECON FAM
        </p>
      </footer>
    </div>
  );
}
