import React from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import BoxTestimonials from "../BoxTestimonials/BoxTestimonials";
import "../TestimonialsComponent/TestimonialsComponent.css";
const TestimonialsComponent = () => {
  const boxesData = [
    {
      shortDescription:
        "After the Internship I started applying for jobs because I felt so confident that I know what I am doing and I can work as marketer. ",
      image: require("../../assets/images/Ellipse 309.png"),
      altText: "Image 1",
      imageDescription: "Lori B. ",
      link: "https://calendly.com/lori-bebic/former-student-call?month=2024-03", // Add link for the first box
      buttonContent: "Book a call with Lori here",
    },
    {
      shortDescription:
        "Literally we did everything with the mentor, from writing a copy, to SEO optimization, Email Marketing Automation, B2B Cold Outreach to organizing events.  ",
      image: require("../../assets/images/Ellipse 309 (1).png"),
      altText: "Image 2",
      imageDescription: "Philip K. ",
      link: "https://calendly.com/filipkalabakov",
      buttonContent: "Book a  call with Philip here ",
    },
    {
      shortDescription:
        "The most interesting part from the program was the Internship. I worked in a team with one more colleague and our mentor was Arijana. ",
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
          paragraph1="What is the experience of the students that took part in the Internship Program? Read below."
        />
        <div className="boxes-internship">
          <BoxTestimonials boxes={boxesData} links={true} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;
