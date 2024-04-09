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
            "Full Course Syllabus ",
            "Two Classes per week, 4 hours total ",
            "Synchronous Online Delivery",
            "US Accredited Diploma",
            "Comprehensive Resume / LinkedIn Profile Enhancement ",
            "Monthly Hiring Contests ",
          ]}
          title="FOUNDATION TRACK"
          price="$ 3,500"
          saves="Save $ 3,500"
          buttonContent="Apply Now for Scholarship  "
          lastparagraph="Financing also available over 12-24 months period. "
          priceperweek="$175 per week /"
          normalprice="Normal Price: $7,000"
        />
        <LongCard
          title="GROWTH TRACK"
          price=" $ 4,000"
          normalprice="Normal Price: $8,000"
          saves="Save $ 4,000"
          image={Star}
          paragraphs={[
            "Everything from Foundation Track",
            "90 days Internship Included",
            "Freelancing Module Included  ",
          ]}
          lastparagraph="Financing also available over 12-24 months period. "
          buttonContent="Apply Now for Scholarship "
          buttontop="MOST POPULAR"
          scrollToId="Stojanço"
          priceperweek="$200 per week /"
        />
        <LongCard
          title="LEADERSHIP TRACK"
          price="$ 7,000"
          image={Heart}
          normalprice="Normal Price : $14,000"
          saves="SAVE $ 7,000"
          paragraphs={[
            "Everything from Growth Track ",
            "Advanced Courses ( AI, Video Edit, SEO and Cold Email Outreach )  ",
            "Career Accelerator Program  ",
            "Personal Recruiter for Career Advancement",
          ]}
          lastparagraph="Financing also available over 12-24 months period.  "
          buttonContent="Apply Now for Scholarship "
          scrollToId="Stojanço"
          priceperweek="$350 per week /"
        />
      </div>
    </div>
  );
};

export default OffersComponent;
