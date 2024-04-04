import React from "react";
import ConceptDesktop from "../../assets/images/concept.svg";
import ConceptMobile from "../../assets/images/concept-mobile.svg";
import TitleComponent from "../TitleComponent/TitleComponent";
import "../ConceptComponent/Concept.css";
const Concept = () => {
  return (
    <>
      <div className="concepts-section">
        <TitleComponent
          title="Program Timeline Overview  "
          paragraph1="Embark on a structured and immersive learning journey with Creative Hub."
          paragraph2="Select a Track Below to view the Schedule. "
        />
        <div className="table-concept">
          <img src={ConceptDesktop} alt="conceptimage" />
        </div>
        <div className="table-concept-mobile">
          <img src={ConceptMobile} alt="conceptimage" />
        </div>
      </div>
    </>
  );
};

export default Concept;
