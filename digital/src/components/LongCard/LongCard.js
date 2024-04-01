import React from "react";
import "../LongCard/LongCard.css";
import Tick from "../../assets/images/tick-bonus.png";

function LongCard({
  image,
  paragraphs,
  lastparagraph,
  buttonContent,
  spanContent,
  spanContent2,
  spanContent3,
  priceperweek,
  buttontop,
  scrollToId, // New prop for the ID to scroll to
}) {
  // Function to handle scrolling to the specified ID
  const scrollToSection = () => {
    const element = document.getElementById(scrollToId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="long-card">
      {buttontop && <button className="button-top">{buttontop}</button>}
      <div className="image">
        <img src={image} alt="longcard" />
      </div>
      <div className="row-1">
        {paragraphs.slice(0, 2).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <br />
        <span>{spanContent}</span>
        <br />
        <span>{spanContent2}</span>
        <br />
        <span>{spanContent3}</span>
      </div>
      <hr />
      <div className="row-2">
        {paragraphs.slice(2).map((paragraph, index) => (
          <div key={index} className="paragraph-with-tick">
            <img src={Tick} alt="Tick" />
            <p>{paragraph}</p>
          </div>
        ))}
      </div>
      <div className="price_perweek">
        <h3>
          {priceperweek}
          <span className="weekspan">32 weeks</span>
        </h3>
      </div>
      <hr />
      <div className="row-3">
        <p>{lastparagraph}</p>
        {/* Using a button with onClick for scrolling to the specified ID */}
        <button className="button-offer" onClick={scrollToSection}>
          {buttonContent}
        </button>
      </div>
    </div>
  );
}

export default LongCard;
