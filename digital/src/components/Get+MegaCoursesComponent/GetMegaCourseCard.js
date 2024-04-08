import React from "react";
import Tick from "../..//assets/images/Group 44670.svg";
import "../Get+MegaCoursesComponent/GetMegaCourseCard.css";
const GetMegaCourseCard = ({
  title,
  subtitle,
  firstparagraph,
  imgsrc,
  paragraphstick,
  altext,
}) => {
  return (
    <div className="card-get">
      <h2>{title}</h2>
      <span>{subtitle}</span>
      <hr />
      <div className="cardget-body">
        <p className="first-paragraph">{firstparagraph}</p>
        {imgsrc && <img src={imgsrc} alt={altext} className="nextgen" />}
        {paragraphstick.map((paragraph, index) => (
          <div className="tick-getcourse" key={index}>
            <img src={Tick} alt="tick" />
            <p>{paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetMegaCourseCard;
