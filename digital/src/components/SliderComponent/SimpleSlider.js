import React, { useRef } from "react";
import Slider from "react-slick";
import TeamMemberCardMobile from "../TeamMemberCard/TeamMemberCardMobile.js";
import { teamMembers } from "../../utils/dummydata.js";
import "./SimpleSlider.css"; // Adjust the path to your CSS file
import TitleComponent from "../TitleComponent/TitleComponent.js";

export default function SimpleSlider() {
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
      <div className="title-teammembermobile">
        {" "}
        <TitleComponent title="Our Esteemed Faculty" />
      </div>

      <div className="slider-wrapper">
        <Slider ref={sliderRef} {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index}>
              <TeamMemberCardMobile member={member} />
            </div>
          ))}
        </Slider>
        {isMobile && (
          <div className="custom-arrows">
            <div className="custom-prev-arrow">{customPrevArrow}</div>
            <div className="custom-next-arrow">{customNextArrow}</div>
          </div>
        )}
      </div>
    </>
  );
}
