import React from "react";
import "../HowToFinance/HowToFinanceComponent.css";
import Instructor from "../../assets/images/Ellipse 309 (6).svg";
import TitleComponent from "../TitleComponent/TitleComponent";
import ButtonComponent from "../Button/ButtonComponent";
const HowToFinanceComponent = () => {
  return (
    <div className="finance-section" id="Stojanço">
      <div className="howtofinance-table">
        <TitleComponent
          title="Navigating Your Educational  "
          spantext="Investment"
        />
        <h5>Apply for $3,500 - $5,000 Scholarship ! </h5>
        <span>
          Discover the steps to apply for a scholarship by scheduling a call
          with Jeff, our
          <span className="ourhead"> Head of Scholarships in the USA.</span>
        </span>
        <a
          href="https://calendly.com/jeff-zwhl/30min"
          target="_blank"
          rel="noopener noreferrer">
          <ButtonComponent>Schedule a Meeting</ButtonComponent>
        </a>
        <div className="howtofinance-instructor">
          <img src={Instructor} alt="Stojanço" />
          <p>Jeff Limberg</p>
        </div>
      </div>
    </div>
  );
};

export default HowToFinanceComponent;
