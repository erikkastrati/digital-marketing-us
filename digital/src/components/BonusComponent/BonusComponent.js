import React from "react";
import "../BonusComponent/BonusComponent.css";
import BoxComponent from "../Box/BoxComponent";
import TitleComponent from "../TitleComponent/TitleComponent";
import ButtonPractice from "../ButtonPracticeComponent/ButtonPractice";
const BonusComponent = () => {
  const boxes = [
    {
      image: require("../../assets/images/people.png"),
      title: "Leadership",
      bonuscontent: [
        "Emotional Intelligence ",
        "Leadership Vs. Management",
        "Difference between manager and leader ",
        "Coping with change",
      ],
    },
    {
      image: require("../../assets/images/lamp-on.png"),
      title: "Entrepreneurship",
      bonuscontent: [
        "How to start your own business ",
        "Crafting the elements of a business strategy",
        "Choosing the right business model  ",
        "Hiring the right people",
      ],
    },
    {
      image: require("../../assets/images/tick-bonus.png"),
      title: "Career Success",
      bonuscontent: [
        "Setting up your own KPI’s",
        "Aligning your goals with your career path",
        "Developing Discipline ",
        "Business Communication",
      ],
    },
  ];
  return (
    <div className="container-bonus">
      <ButtonPractice>MONTH 9-12</ButtonPractice>
      <TitleComponent
        title="Leadership Track Career Accelerator "
        paragraph1="Elevate your career journey with key skills for further success."
      />

      <div className="boxes-bonus">
        <BoxComponent boxes={boxes} className="box-bonus" />
      </div>
    </div>
  );
};

export default BonusComponent;
