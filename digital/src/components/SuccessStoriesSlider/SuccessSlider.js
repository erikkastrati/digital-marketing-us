import React, { useRef } from "react";
import Slider from "react-slick";
// import BoxComponent from "../Box/BoxComponent.js";
import BoxSuccess from "../BoxSuccess/BoxSuccess.js";
import TitleComponent from "../TitleComponent/TitleComponent.js";
import "../SuccessStoriesSlider/SuccessSlider.css";
export default function SuccessSlider() {
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

  const sliderRef = useRef(null); // Reference to the Slider component

  const prevButtonImage = require("../../assets/images/ArrowCircleLeft.png");
  const nextButtonImage = require("../../assets/images/ArrowCircleRight.png");

  const customPrevArrow = (
    <img
      src={prevButtonImage}
      alt="Previous"
      className="custom-arrow prev-arrow"
      onClick={() => sliderRef.current.slickPrev()} // Go to previous slide
    />
  );

  const customNextArrow = (
    <img
      src={nextButtonImage}
      alt="Next"
      className="custom-arrow next-arrow"
      onClick={() => sliderRef.current.slickNext()} // Go to next slide
    />
  );

  const isMobile = window.innerWidth <= 768; // Check if the screen width is less than or equal to 768px

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display one card per slide
    slidesToScroll: 1,
    prevArrow: customPrevArrow,
    nextArrow: customNextArrow,
    responsive: [
      {
        breakpoint: 768, // Adjust for screens with width 768px
        settings: {
          slidesToShow: 1, // Display one card per slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="success-sliders">
        <div className="title-teammembermobile">
          {" "}
          <TitleComponent
            title="Success Stories"
            paragraph1=" Find employment quicker"
            paragraph2=" with our Flexible Internship Program."
          />
        </div>

        <div className="slider-wrapper">
          {isMobile && (
            <div className="custom-arrows">
              <div className="custom-prev-arrow">{customPrevArrow}</div>
              <div className="custom-next-arrow">{customNextArrow}</div>
            </div>
          )}
          <Slider ref={sliderRef} {...settings}>
            {boxes.map((box, index) => (
              <div key={index}>
                <BoxSuccess box={box} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
