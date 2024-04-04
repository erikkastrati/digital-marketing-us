import React from "react";
// import ButtonPractice from "../ButtonPracticeComponent/ButtonPractice";
import TitleComponent from "../TitleComponent/TitleComponent";
import USA from "../../assets/images/usa-icon.svg";
import "../DiplomaComponent/Diploma.css";
const Diploma = () => {
  return (
    <div className="diploma-container">
      <div className="diploma-section">
        <TitleComponent title="Earn a Diploma That Opens Doors" />

        <div className="table-diploma">
          <img src={USA} alt="usa" />
          <h3>Receive Accredited Diploma in Digital Marketing</h3>
          <p>
            Creative Hub holds accreditation as a licensed tech school by the
            Commission for Independent Education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Diploma;
