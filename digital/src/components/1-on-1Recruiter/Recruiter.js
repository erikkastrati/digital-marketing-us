import React from "react";
import "../1-on-1Recruiter/Recruiter.css";
import ImgPractice from "../../assets/images/recruiter-image.png";
import Tick from "../../assets/images/tick.svg";
import ButtonPractice from "../ButtonPracticeComponent/ButtonPractice";
const Recruiter = () => {
  return (
    <div className="recruiter-container">
      <div className="recruiter-section">
        <div className="recruiter-left">
          <img src={ImgPractice} alt="practiceimg" className="blueimageleft" />
        </div>
        <div className="recruiter-right">
          <ButtonPractice>MONTH 9 - 12</ButtonPractice>
          <h3>Personal Recruiter Consultations </h3>

          <div className="recruiter">
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>Personal Outreach to Recruiters on your behalf</h5>
            </div>
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>Handpicked selection of Global Job Opportunities</h5>
            </div>
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>Curated list of target companies based of your interest</h5>
            </div>
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>
                Weekly introductions to industry recruiters for enhanced
                networking
              </h5>
            </div>
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>
                Customized cover letters to highlight your unique strengths
              </h5>
            </div>
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>Dedicated bi-weekly sessions to review your progress</h5>
            </div>
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>Exclusive monthly Q&A sessions for personalized guidance</h5>
            </div>
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>
                Assistance in establishing your personal job tracking system
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruiter;
