import React from "react";
import "../1-on-1Recruiter/Recruiter.css";
import ImgPractice from "../../assets/images/PracticeComponent.png";
import Tick from "../../assets/images/tick.svg";
const Recruiter = () => {
  return (
    <div className="recruiter-container">
      <div className="recruiter-section">
        <div className="recruiter-left">
          <img src={ImgPractice} alt="practiceimg" />
        </div>
        <div className="recruiter-right">
          <h3>Personal Recruiter Consultations </h3>

          <div className="recruiter">
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>Personal outreach to 2 recruiters on your behalf</h5>
            </div>
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>Handpicked selection of 5 global job opportunities</h5>
            </div>
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>Curated list of 5 companies tailored to your interests</h5>
            </div>
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>
                Weekly introductions to 5 industry recruiters for enhanced
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
                Assistance in establishing your bespoke job tracking system
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruiter;
