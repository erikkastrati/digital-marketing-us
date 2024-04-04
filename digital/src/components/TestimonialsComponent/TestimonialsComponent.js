import React from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import BoxTestimonials from "../BoxTestimonials/BoxTestimonials";
import "../TestimonialsComponent/TestimonialsComponent.css";
const TestimonialsComponent = () => {
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
  return (
    <div className="testimonials-container">
      <div className="testimonial-section">
        <TitleComponent
          title="Internship Testimonials"
          paragraph1="Hear from our interns about their experiences in the program."
        />
        <div className="boxes-internship">
          <BoxTestimonials boxes={boxesData} links={true} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;
