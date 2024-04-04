import React from "react";
import "../TeamMemberCard/TeamMemberCard.css";
const TeamMemberCard = ({ member }) => {
  const { imageSrc, name, description, additionalInfo, lastrow } = member;

  return (
    <div className="team-member-card">
      <div className="image-container">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="info-container">
        <h2>{name}</h2>
        <p>{description}</p>
        <hr />
        <h4>{additionalInfo}</h4>
        <h5>{lastrow}</h5>
      </div>
    </div>
  );
};

export default TeamMemberCard;
