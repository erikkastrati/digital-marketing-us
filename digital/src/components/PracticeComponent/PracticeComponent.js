import React from "react";
import ImgPractice from "../../assets/images/PracticeComponent.png";
import ButtonPractice from "../ButtonPracticeComponent/ButtonPractice";
import Tick from "../../assets/images/tick.svg";
import "../PracticeComponent/PracticeComponent.css";
const PracticeComponent = () => {
  return (
    <div className="practice-container">
      <div className="practice-section">
        <div className="practice-left">
          <img src={ImgPractice} alt="practiceimg" />
        </div>
        <div className="practice-right">
          <ButtonPractice>months 4-6</ButtonPractice>
          <h3>Applied Experience</h3>
          <p>
            Enroll in our Flexible Internship to gain real-world experience as
            you study.
          </p>
          <p>
            This 3-month program offers 12 weekly hours you can tailor to your
            schedule, teamwork with a peer, and mentor guidance.{" "}
          </p>
          <p>Below, explore the skills you’ll master in the Growth Track :</p>
          <div className="practices">
            <div className="pract">
              <img src={Tick} alt="tick" />
              <h5>Teamwork and Responsibility</h5>
            </div>
            <div className="pract">
              <img src={Tick} alt="tick" />
              <h5>Understanding of Marketing Brief and Work Tasks</h5>
            </div>
            <div className="pract">
              <img src={Tick} alt="tick" />
              <h5>Email Marketing</h5>
            </div>
            <div className="pract">
              <img src={Tick} alt="tick" />
              <h5>
                Copywriting, Content Creation, Wordpress, SEO, Project
                Management
              </h5>
            </div>
            <div className="pract">
              <img src={Tick} alt="tick" />
              <h5>B2B Lead Generation, PR, Event Management</h5>
            </div>
            <div className="pract">
              <img src={Tick} alt="tick" />
              <h5>Cold Email Outreach, B2B, Communication</h5>
            </div>
            <div className="pract">
              <img src={Tick} alt="tick" />
              <h5>Account Management & Community Building</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeComponent;
