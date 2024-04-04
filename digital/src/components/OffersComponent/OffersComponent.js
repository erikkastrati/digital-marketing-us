import React from "react";
import "../OffersComponent/OffersComponent.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import LongCard from "../LongCard/LongCard";
import AcademyOnly from "../../assets/images/Path 454.svg";
import Star from "../../assets/images/star.svg";
import Heart from "../../assets/images/heart.svg";

const OffersComponent = () => {
  return (
    <div className="offers-section">
      <div className="title-offersection">
        <TitleComponent title="Select Your Path to Success" />
      </div>
      <div className="long-cards">
        <LongCard
          className="second-longcard"
          image={AcademyOnly}
          paragraphs={[
            "All Modules ",
            "Twice a week for 2 hours 12PM - 2 PM ",
            "Delivered Online Synchronously",
            "US Recognized Diploma",
            "Hiring Contest ",
          ]}
          title="FOUNDATION TRACK"
          price="$ 3,500"
          saves="Save $ 3,500"
          buttonContent="Apply Now for Scholarship "
          lastparagraph="Financing also available over 12-24 months period. ! "
          priceperweek="$110 per week /"
          normalprice="Normal Price: $7,000"
        />
        <LongCard
          title="GROWTH TRACK"
          price="$ 4,000"
          normalprice="Normal Price: $8,000"
          saves="Save $ 4,000"
          image={Star}
          paragraphs={[
            "Everything from Basic Program",
            "90 days Internship Included with the Program",
            "Freelance Course ",
            "Mega Courses ( AI + VIdeo Edit )  ",
            "Hiring Contest ",
          ]}
          lastparagraph="Financing also available over 12-24 months period. "
          buttonContent="Available with 50% off Scholarship"
          buttontop="MOST POPULAR"
          scrollToId="Stojanço"
          priceperweek="$125 per week /"
        />
        <LongCard
          title="LEADERSHIP TRACK"
          price="$ 7,000"
          image={Heart}
          normalprice="Normal Price:$14,000"
          saves="SAVE $ 7,000"
          paragraphs={[
            "Everything from Mega+  ",
            "1 on 1 with Professional Recruiter so you can get to the next level in your career ",
            "10x Courses ( Leadership, Entrepreneurship, Setting up your career for success ).  ",
          ]}
          lastparagraph="Financing also available over 12-24 months period.  "
          buttonContent="Available with 50% off Scholarship"
          scrollToId="Stojanço"
          priceperweek="$220 per week /"
        />
      </div>
    </div>
  );
};

export default OffersComponent;
