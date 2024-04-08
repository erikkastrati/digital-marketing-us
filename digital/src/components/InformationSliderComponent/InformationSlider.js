import React, { useRef } from "react";
import Slider from "react-slick";
import InformationBoxSlider from "../InformationBoxSlider/InformationBoxSlider.js";
import TitleComponent from "../TitleComponent/TitleComponent.js";
import "../InformationSliderComponent/InformatioSlider.css";
export default function InformationSlider() {
  const information = [
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
      <div className="information-sliders">
        <div className="title-informationslider">
          {" "}
          <TitleComponent title="Learn from an Award-winning Tech School" />
        </div>

        <div className="slider-wrapper">
          {isMobile && (
            <div className="custom-arrows">
              <div className="custom-prev-arrow">{customPrevArrow}</div>
              <div className="custom-next-arrow">{customNextArrow}</div>
            </div>
          )}
          <Slider ref={sliderRef} {...settings}>
            {information.map((box, index) => (
              <div key={index}>
                <InformationBoxSlider
                  information={[box]} // Pass only one box at a time
                  className="box-information"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
