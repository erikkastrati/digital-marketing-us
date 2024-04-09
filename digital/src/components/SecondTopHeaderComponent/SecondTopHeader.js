import React from "react";
import "../SecondTopHeaderComponent/SecondTopHeader.css";
import Call from "../../assets/images/call.svg";
const SecondTopHeader = () => {
  return (
    <div className="secondhead-section">
      <div className="container-secondhead">
        <div className="left-secondhead">
          <h4>
            Successful careers <span>made possible</span>
          </h4>
        </div>
        <div className="right-secondhead">
          <img src={Call} alt="bookcall" />
          <a
            href="https://calendly.com/jeff-zwhl/creativehub-30min?month=2024-04"
            target="_blank"
            rel="noopener noreferrer">
            <h4>Schedule a Meeting</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecondTopHeader;
