import React from "react";
import "../OffersComponent/OffersComponent.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import LongCard from "../LongCard/LongCard";
import AcademyOnly from "../../assets/images/Path 454.svg";
import Star from "../../assets/images/Path 444.svg";
import Heart from "../../assets/images/Path 450.svg";

const OffersComponent = () => {
  return (
    <div className="offers-section">
      <div className="title-offersection">
        <TitleComponent title="Избери ја понудата што најмногу ти одговара" />
      </div>
      <div className="long-cards">
        <LongCard
          image={AcademyOnly}
          paragraphs={[
            "FOUNDATION TRACK ",
            "$ 3,500 ",
            "All Modules ",
            "Twice a week for 2 hours 12PM - 2 PM ",
            "Delivered Online Synchronously",
            "US Recognized Diploma",
            "Hiring Contest ",
          ]}
          buttonContent="Apply Now for Scholarship "
          lastparagraph="Limited Availability ! "
          spanContent=" 50% SCHOLARSHIP"
          spanContent2="Normal Price : $7,000 "
          spanContent3="SAVE $ 3,500"
          priceperweek="$110 per week /"
        />
        <LongCard
          image={Star}
          paragraphs={[
            "GROWTH TRACK",
            "$ 4,000 ",
            "Everything from Basic Program",
            "90 days Internship Included with the Program",
            "Freelance Course ",
            "Mega Courses ( AI + VIdeo Edit )  ",
            "Hiring Contest ",
          ]}
          lastparagraph="Apply now or wait for the next group in September!"
          buttonContent="Available with 50% off Scholarship"
          buttontop="MOST POPULAR"
          scrollToId="Stojanço"
          spanContent=" 50% SCHOLARSHIP"
          spanContent2="Normal Price : $8,000 "
          spanContent3="SAVE $ 4,000"
          priceperweek="$220 per week /"
        />
        <LongCard
          image={Heart}
          paragraphs={[
            "LEADERSHIP TRACK",
            "$ 5,000 ",

            "Everything from Mega+  ",
            "1 on 1 with Professional Recruiter so you can get to the next level in your career ",
            "10x Courses ( Leadership, Entrepreneurship, Setting up your career for success ).  ",
          ]}
          lastparagraph="Limited to only 20 students per year. "
          buttonContent="Available with 50% off Scholarship"
          scrollToId="Stojanço"
          spanContent=" 50% SCHOLARSHIP"
          spanContent2="Normal Price : $10,000 "
          spanContent3="SAVE $ 5,000"
          priceperweek="$330 per week /"
        />
      </div>
    </div>
  );
};

export default OffersComponent;
