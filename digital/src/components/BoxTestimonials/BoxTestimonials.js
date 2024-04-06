import React from "react";
import "../BoxTestimonials/BoxTestimonial.css";
import ButtonComponent from "../Button/ButtonComponent";
import Star from "../../assets/images/star-testimonials.svg";

const BoxTestimonials = ({ boxes, links }) => {
  return (
    <div className="box-testimonials-container">
      {boxes &&
        boxes.map((box, index) => (
          <div key={index} className="box-testimonials">
            {/* Stars */}
            <div className="stars">
              {Array.from({ length: 5 }, (_, i) => (
                <img key={i} src={Star} alt="star" />
              ))}
            </div>

            <p className="short-description">{box.shortDescription}</p>
            <div className="box-testimonialimg">
              <img src={box.image} alt={box.altText} />
              <p>{box.imageDescription}</p>
            </div>

            {/* Button */}

            {links && box.link && (
              <div className="button-testimonials">
                <hr />
                <ButtonComponent
                  onClick={() => window.open(box.link, "_blank")}>
                  {box.buttonContent}
                </ButtonComponent>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default BoxTestimonials;
