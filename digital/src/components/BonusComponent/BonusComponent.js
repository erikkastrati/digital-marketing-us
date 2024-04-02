import React from "react";
import "../BonusComponent/BonusComponent.css";
import BoxComponent from "../Box/BoxComponent";
import TitleComponent from "../TitleComponent/TitleComponent";
const BonusComponent = () => {
  const boxes = [
    {
      image: require("../../assets/images/people.png"),
      title: "Leadership",
    },
    {
      image: require("../../assets/images/lamp-on.png"),
      title: "Entrepreneurship",
    },
    {
      image: require("../../assets/images/tick-bonus.png"),
      title: "Career Success",
    },
  ];
  return (
    <div className="container-bonus">
      <TitleComponent
        title="Leadership Track 
Career Accelerator "
        paragraph1="Elevate your career journey with key skills for further success."
      />

      <div className="boxes-bonus">
        <BoxComponent boxes={boxes} className="box-bonus" />
      </div>
    </div>
  );
};

export default BonusComponent;
