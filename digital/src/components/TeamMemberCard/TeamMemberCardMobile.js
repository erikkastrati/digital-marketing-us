import React from "react";
import "../TeamMemberCard/TeamMemberCardMobile.css";
const TeamMemberCard = ({ member }) => {
  const { imageSrc, name, description, additionalInfo, lastrow } = member;

  return (
    <div className="team-member-cardmobile">
      <div className="teammember-head">
        <div className="image-container">
          <img src={imageSrc} alt={name} />
        </div>
        <div className="info-container">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <hr />
      <h4>{additionalInfo}</h4>
      <h5>{lastrow}</h5>
    </div>
  );
};

export default TeamMemberCard;
