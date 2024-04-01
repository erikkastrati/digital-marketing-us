import React from "react";
import "../HiringComponent/HiringComponent.css";
import ButtonPractice from "../ButtonPracticeComponent/ButtonPractice";
import TitleComponent from "../TitleComponent/TitleComponent";
import BoxComponent from "../Box/BoxComponent";
const HiringComponent = () => {
  const boxes = [
    {
      image: require("../../assets/images/image10 1.png"),
      altText: "Image 1",
      title:
        "Hiring Contest with McCann Marketing Agency for the position Copywriter. ",
    },
    {
      image: require("../../assets/images/image4 1.png"),
      altText: "Image 2",
      title: "Internship for our student Tom at Softdrink, Miami. ",
    },
    {
      image: require("../../assets/images/image6 1.png"),
      altText: "Image 2",
      title:
        "Hiring Contest with Idea Lab Marketing Agency for the position Account Executive. ",
    },
  ];
  return (
    <div className="hiring-container">
      <div className="hiring-section">
        <ButtonPractice>MONTH-8</ButtonPractice>
        <TitleComponent
          title="Hiring Challenge"
          paragraph1="Each month, our Hiring Challenges create a bridge, connecting skilled students "
          paragraph2="directly with top companies looking for fresh talent."
        />
        <div className="box-hiring">
          <BoxComponent boxes={boxes} className="boxes-hiring" />
        </div>
      </div>
    </div>
  );
};

export default HiringComponent;
