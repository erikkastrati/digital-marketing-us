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
          <h4>Book a call</h4>
        </div>
      </div>
    </div>
  );
};

export default SecondTopHeader;
