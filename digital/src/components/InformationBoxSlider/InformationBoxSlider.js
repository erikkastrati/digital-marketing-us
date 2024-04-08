import React from "react";
import "../InformationBoxSlider/InformationBoxSlider.css";
const InformationBoxSlider = ({ information }) => {
  return (
    <div className="information-box-sliders">
      {information.map((item, index) => (
        <div key={index} className="information-boxslider">
          <img src={item.image} alt={item.altText} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InformationBoxSlider;
