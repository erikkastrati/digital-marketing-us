import React from "react";
import ButtonPractice from "../ButtonPracticeComponent/ButtonPractice.js";
import SkillImg from "../../assets/images/EarningImage.png";
import "../SkillComponent/Skill.css";
const Skill = () => {
  return (
    <div className="skill-container">
      <div className="skill-section">
        <div className="skill-left">
          <img src={SkillImg} alt="practiceimg" />
        </div>
        <div className="skill-right">
          <ButtonPractice>MONTH 9 - 12</ButtonPractice>
          <h3>
            "Maximize your marketing role by enhancing your skill set with our
            leadership, entrepreneurship, and career success post-academic
            courses
          </h3>
          <p>This courses you can watch on your own time. </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
