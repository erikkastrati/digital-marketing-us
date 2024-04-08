import React, { useRef } from "react";
import Slider from "react-slick";
import "../SliderComponent/SimpleSlider.css";
import "../ConceptMobileComponent/ConceptSliderMobile.css";
import GreenDiv from "../../assets/images/greendivmobile.svg";
import BlackDiv from "../../assets/images/blackdivmobile.svg";
import BrownDiv from "../../assets/images/Browndivmobile.svg";

const ConceptSliderMobile = () => {
  const sliderRef = useRef(null); // Reference to the Slider component
  const prevButtonImage = require("../../assets/images/ArrowCircleRight (2).png");
  const nextButtonImage = require("../../assets/images/ArrowCircleRight (3).png");

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
    <div className="slider-containermobile">
      <Slider {...settings} ref={sliderRef}>
        <div>
          <img src={GreenDiv} alt="greendiv" />
        </div>
        <div>
          <img src={BlackDiv} alt="blackdiv" />
        </div>
        <div>
          <img src={BrownDiv} alt="browndiv" />
        </div>
      </Slider>
      <div className="custom-arrows1">
        <div className="custom-prev-arrow">{customPrevArrow}</div>
        <div className="custom-next-arrow">{customNextArrow}</div>
      </div>
    </div>
  );
};

export default ConceptSliderMobile;
