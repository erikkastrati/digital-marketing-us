import React from "react";
import RightArrowProgram from "../../assets/images/ArrowCircleRight (4).svg";
import LeftArrowProgram from "../../assets/images/ArrowCircleRight (5).svg";
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      <img src={LeftArrowProgram} alt="prevarrow" />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      <img src={RightArrowProgram} alt="nextarrow" />
    </div>
  );
};

export { PrevArrow, NextArrow };
