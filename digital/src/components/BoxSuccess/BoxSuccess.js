import React from "react";
import "../BoxSuccess/BoxSuccess.css";

const BoxSuccess = ({ box }) => {
  return (
    <div className="box-success">
      <div className="imagebox-success">
        {box.image && <img src={box.image} alt={box.altText} />}
      </div>
      <div className="box-content-success">
        <h3>{box.title}</h3>
        <p>{box.description}</p>
        {box.company && <img src={box.company} alt={box.altCompany} />}
      </div>
    </div>
  );
};

export default BoxSuccess;
