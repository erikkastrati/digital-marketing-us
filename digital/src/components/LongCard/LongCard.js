import React from "react";
import "../LongCard/LongCard.css";
import Tick from "../../assets/images/tick-bonus.png";

function LongCard({
  image,
  paragraphs,
  lastparagraph,
  buttonContent,
  title,
  price,
  normalprice,
  saves,
  priceperweek,
  buttontop,
  scrollToId, 
}) {
  const scrollToSection = () => {
    const element = document.getElementById(scrollToId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="long-card">
      {buttontop && <button className="button-top">{buttontop}</button>}
      <div className="row-1">
        <div className="head-longcard">
          <div className="title-longcard">
            <h3>{title}</h3>
          </div>
          <div className="description-headcard">
            <div className="img-longcard">
              <img src={image} alt="imglongcard" />
            </div>
            <div className="dsp-headcard">
              <p>{price}</p>
            </div>
          </div>
          <h4>*50% Scholarship</h4>
        </div>
        <div className="saves-section">
          <p>{normalprice}</p>
          <span className="save">{saves}</span>
        </div>
      </div>
      <hr />
      <div className="row-2">
        {paragraphs.slice(0).map((paragraph, index) => (
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
        <p>Limited Availability</p>
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
