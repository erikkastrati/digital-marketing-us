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
          <h3>1-on-1 with Recruiter </h3>
          <p>
            While you enjoy your new workplace as marketer, take the opportunity
            to add bonus skills with the post Academic Courses for Leadership,
            Entrepreneurship and Career Success.
          </p>
          <span>This courses you can watch on your own time.</span>

          <div className="recruiter">
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>Teamwork and Responsibility</h5>
            </div>
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>Understanding of Marketing Brief and Work Tasks</h5>
            </div>
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>Email Marketing</h5>
            </div>
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>
                Copywriting, Content Creation, Wordpress, SEO, Project
                Management
              </h5>
            </div>
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>B2B Lead Generation, PR, Event Management</h5>
            </div>
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>Cold Email Outreach, B2B, Communication</h5>
            </div>
            <div className="rec">
              <img src={Tick} alt="tick" />
              <h5>Account Management & Community Building</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruiter;
