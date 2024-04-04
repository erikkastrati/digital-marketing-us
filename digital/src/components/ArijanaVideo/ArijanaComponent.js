import React from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import ArijanaVideo from "../../assets/Arijana.mp4";
import "../ArijanaVideo/ArijanaComponent.css";

const ArijanaComponent = () => {
  return (
    <div className="video-container">
      <div className="video-section">
        <TitleComponent title="A Message from Our Founder" />
        <div className="video-wrapper">
          <video src={ArijanaVideo} controls>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default ArijanaComponent;
