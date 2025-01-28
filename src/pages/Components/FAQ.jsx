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
    <div className="faq-container Red-Rose">
      <h1 className="faq-heading">FAQ</h1>
      <div className="faq-boxes-wrapper" ref={faqBoxesWrapper}>
        <div className="faq-boxes">
          <div className="faq-box">
            <div className="text-4xl">Who can participate in the event?</div>
            <p className="text-xl mt-4">Everyone who is a student of Thapar Institute can participate.</p>
          </div>
          <div className="faq-box">
            <div className="text-4xl">What is "The Wolf of Dalal Street" event?</div>
            <p className="text-xl mt-4">
              WDS: The Wolf of Dalal Street!! The grandeur event of ECON CLUB
              which encompasses the glimpse of Dalal Street where the virtual
              trading takes place on hand.
            </p>
          </div>
          <div className="faq-box">
            <div  className="text-4xl">Is there any registration fee needed?</div>
            <p div className="text-xl mt-4">No, the event is free for all students of TIET.</p>
           
          </div>
          <div className="faq-box">
            <div className="text-4xl">When and where is the event taking place?</div>
            <p className="text-xl mt-4">TAN audi on 8th and 9th February</p>
          </div>
          <div className="faq-box">
            <div className="text-4xl">What all can we expect to learn from the event?</div>
            <p className="text-xl mt-4">Participants will gain insights into stock fundamentals, investment strategies, market analysis, and risk management.</p>
          </div>
          <div className="faq-box">
            <div className="text-4xl">Is there any prerequisite knowledge needed?</div>
            <p className="text-xl mt-4">Only a very basic understanding of the stock market will be enough.</p>
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
          <h2 className="faq-contact-heading"><p>HAVE ANY</p><p> QUERIES?</p></h2>
        </div>
        <div id="1">
          <div className="faq-contact-details">
            <div className="contact-item">
              <p className="label text-3xl">Mail us:</p>
              <p className="text-2xl">econclub@thapar.edu</p>
            </div>
            <div className="contact-item">
              <p className="label text-3xl">Contact us:</p>
              <p className="text-2xl">+91 82839 27588 / +91 70098 94032</p>
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
