import React, { useRef } from "react";
import Slider from "react-slick";
import BoxTestimonials from "../BoxTestimonials/BoxTestimonials.js";
import TitleComponent from "../TitleComponent/TitleComponent.js";
import "../TestimonialsSlider/TestimonialSlider.css";
export default function TestimonialSlider() {
  const boxesData = [
    {
      shortDescription:
        "After my internship, I began job applications with increased confidence, ready to start my new career as a marketer.",
      image: require("../../assets/images/Ellipse 309.png"),
      altText: "Image 1",
      imageDescription: "Lori B. ",
      link: "https://calendly.com/lori-bebic/former-student-call?month=2024-03", // Add link for the first box
      buttonContent: "Book a call with Lori here",
    },
    {
      shortDescription:
        "Our mentor guided us through the entire marketing cycle , from copywriting and SEO to email automation and B2B outreach, even event planning.",
      image: require("../../assets/images/Ellipse 309 (1).png"),
      altText: "Image 2",
      imageDescription: "Philip K. ",
      link: "https://calendly.com/filipkalabakov",
      buttonContent: "Book a  call with Philip here ",
    },
    {
      shortDescription:
        "The highlight of the program was definitely the internship, where I get to team up with my colleagues and received great mentorship from the founder Arijana.",
      image: require("../../assets/images/Ellipse 309 (2).png"),
      altText: "Image 2",
      imageDescription: "Maria P. ",
      link: "https://calendly.com/potirovamarija/30min?month=2024-03",
      buttonContent: "Book a call with Maria here",
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
      <div className="testimonial-sliders">
        <div className="title-testimonial">
          {" "}
          <TitleComponent
            title="Internship Testimonials"
            paragraph1=" Hear from our interns about their experiences in the program."
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
            {boxesData.map((box, index) => (
              <div key={index}>
                <BoxTestimonials boxes={[box]} links={true} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
