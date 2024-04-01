import React from "react";
import "../ButtonPracticeComponent/ButtonPractice.css";
const ButtonPractice = ({ children }) => {
  return (
    <div className="button-practice">
      <button>{children}</button>
    </div>
  );
};

export default ButtonPractice;
