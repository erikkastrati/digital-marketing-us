import React from "react";
import "../SuccessStories/SuccessStories.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import BoxComponent from "../Box/BoxComponent";
const SuccessStories = () => {
  const boxes = [
    {
      image: require("../../assets/success-stories/Aleksandar Dinev.png"),
      altText: "Alexander D.",
      title: "Alexander D.",
      description: "Digital Marketing Specialist",
      company: require("../../assets/success-stories/east gate mall.png"),
    },
    {
      image: require("../../assets/success-stories/Teodora Trajanovska.png"),
      altText: "Thea T.",
      title: "Thea T.",
      description: "Junior Search Engine Optimization Specialist",
      company: require("../../assets/success-stories/deptagency.png"),
    },
    {
      image: require("../../assets/success-stories/Branko Popovski 1.png"),
      altText: "Branko P. ",
      title: "Branko P.",
      description: "Senior Marketing Associate",
      company: require("../../assets/success-stories/Sparkasse-logo.png"),
    },
    {
      image: require("../../assets/success-stories/Klimentina Markovikj 1.png"),
      altText: "Clementine M.",
      title: "Clementine M.",
      description: "Campaign Manager",
      company: require("../../assets/success-stories/funnel boost logo.png"),
    },
    {
      image: require("../../assets/success-stories/Ana Nedanoska.png"),
      altText: "Anna N.",
      title: "Anna N.",
      description: "Digital Marketing Consultant",
      company: require("../../assets/success-stories/antibeagency_logo.png"),
    },
    {
      image: require("../../assets/success-stories/Jovana Peneva 1.png"),
      altText: "Jane P.",
      title: "Jane P.",
      description: "Digital Marketing Specialist",
      company: require("../../assets/success-stories/piksel logo-hi-res.png"),
    },
    {
      image: require("../../assets/success-stories/Azra Rusevikj.png"),
      altText: "Azra R.",
      title: "Azra R.",
      description: "Online Marketing",
      company: require("../../assets/success-stories/seomatik.png"),
    },
    {
      image: require("../../assets/success-stories/Goran Georgiev 1.png"),
      altText: "Greg G.",
      title: "Greg G.",
      description: "Digital Marketing Cordinator",
      company: require("../../assets/success-stories/yugoimpex_export_import_doo___woodworking_machinery_logo.png"),
    },
    {
      image: require("../../assets/success-stories/Benjamin Muca.png"),
      altText: "Benjamin M.",
      title: "Benjamin M.",
      description: "Digital Marketing Specialist",
      company: require("../../assets/success-stories/мапас download (3).png"),
    },
  ];

  return (
    <div className="success-section">
      <div className="title-success">
        <TitleComponent
          title="Success Stories "
          paragraph1=" Find employment quicker with our Flexible Internship Program."
        />
      </div>

      <div className="boxes-successstories">
        <BoxComponent boxes={boxes} className="boxes-success" />
      </div>
    </div>
  );
};

export default SuccessStories;
