import React from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import GreenCircle from "../../assets/images/greencircle.svg";
import BlackCircle from "../../assets/images/blackcircle.svg";
import BrownCircle from "../../assets/images/browncircle.svg";
import "../ConceptComponent/Concept.css";
import ConceptSlider from "../ConceptComponent/ConceptSlider.js";

const Concept = () => {
  return (
    <div className="concept-container">
      <div className="concept-section">
        <TitleComponent
          title="Program Timeline Overview"
          paragraph1="Embark on a structured and immersive learning journey with Creative Hub."
          paragraph2="Swipe Below to view the Schedule. "
        />
        <div className="circle-colors">
          <div className="circle-color">
            <img src={GreenCircle} alt="circle-green" />
            <h4>Foundation Track</h4>
          </div>
          <div className="circle-color">
            <img src={BlackCircle} alt="circle-black" />
            <h4>Growth Track </h4>
          </div>
          <div className="circle-color">
            <img src={BrownCircle} alt="circle-brown" />
            <h4>Leadership Track </h4>
          </div>
        </div>
      </div>
      <ConceptSlider />
    </div>
  );
};

export default Concept;
