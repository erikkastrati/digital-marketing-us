import React from "react";
import BoxComponent from "../Box/BoxComponent";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./InformationComponent.css";
const InformationComponent = () => {
  const boxes = [
    {
      image: require("../../assets/images/30-cards.png"),
      altText: "Image 1",
      title:
        "Creative Hub was listed on Forbes 30 Under 30 List - Social Entrepreneurs (2019)",
    },
    {
      image: require("../../assets/images/image 19.png"),
      altText: "Image 2",
      title:
        "Creative Hub won an award during the World Economic Forum in Davos",
    },
    {
      image: require("../../assets/images/America start 6 years 1.png"),
      altText: "Image 2",
      title:
        "Creative Hub Academy is officially licensed school by Florida Department of Education.",
    },
  ];

  return (
    <>
      <div className="information-part">
        <div className="information-title">
          <TitleComponent
            className="title-information"
            title="Learn From an Award-winning Tech School"
          />
        </div>

        <BoxComponent boxes={boxes} className="boxes-information" />
      </div>
    </>
  );
};

export default InformationComponent;
