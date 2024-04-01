import React from "react";
import "../Button/ButtonComponent.css";
const ButtonComponent = ({ onClick, children, buttonContent }) => {
  return (
    <button className="button-green" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonComponent;
