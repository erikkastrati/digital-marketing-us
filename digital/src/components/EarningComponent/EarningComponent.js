import React from "react";
import ButtonPractice from "../ButtonPracticeComponent/ButtonPractice";
import TitleComponent from "../TitleComponent/TitleComponent";
import Tick from "../../assets/images/tick.svg";
import EarningImg from "../../assets/images/EarningImage.png";
import "../EarningComponent/EarningComponent.css";
const EarningComponent = () => {
  return (
    <div className="earning-container">
      <div className="earning-section">
        <div className="earning-left">
          <img src={EarningImg} alt="practiceimg" className="blueimageright" />
        </div>
        <div className="earning-right">
          <ButtonPractice>MONTH 7</ButtonPractice>
          <h3>Master Freelancing Skills and Ace Your Interviews</h3>
          <div className="earnings">
            <div className="earn">
              <img src={Tick} alt="tick" />
              <h5>Bonus Course: Start Your Freelance Career</h5>
            </div>
            <div className="earn">
              <img src={Tick} alt="tick" />
              <h5>Bonus Course: Build Your Professional LinkedIn Profile</h5>
            </div>
            <div className="earn">
              <img src={Tick} alt="tick" />
              <h5>Bonus Course: Build Your CV and Portfolio </h5>
            </div>
            <div className="earn">
              <img src={Tick} alt="tick" />
              <h5>Bonus Course:Win the Interview Process</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningComponent;
