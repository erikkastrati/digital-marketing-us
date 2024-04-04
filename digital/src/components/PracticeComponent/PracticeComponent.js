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
          <h3>Hands-on Experience </h3>
          <p>
            Join our Flexible Internship for hands-on learning while you
            complete your studies.
          </p>
          <p>
            This 12-week experience fits 12 flexible hours into your weekly
            routine, includes collaboration with a fellow student, and features
            mentorship for deeper insights.
          </p>
          <p>Discover the skills you'll hone in the Growth Track below:</p>
          <div className="practices">
            <div className="pract">
              <img src={Tick} alt="tick" />
              <h5>Collaborative Projects & Accountability</h5>
            </div>
            <div className="pract">
              <img src={Tick} alt="tick" />
              <h5>Marketing Objectives and Task Execution</h5>
            </div>
            <div className="pract">
              <img src={Tick} alt="tick" />
              <h5>Email Marketing</h5>
            </div>
            <div className="pract">
              <img src={Tick} alt="tick" />
              <h5>Cold Email Outreach & B2B Lead Generation</h5>
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
              <h5>Public Relations & Event Management</h5>
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
