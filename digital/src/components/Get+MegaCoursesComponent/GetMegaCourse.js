import React from "react";
import "../Get+MegaCoursesComponent/GetMegaCourse.css";
import GetMegaCourseCard from "./GetMegaCourseCard";
import TitleComponent from "../TitleComponent/TitleComponent";
const GetMegaCourse = () => {
  return (
    <div className="getmegacourse_section">
      <TitleComponent title="Advanced Courses" />
      <div className="getmegacourse_table">
        <GetMegaCourseCard
          title="AI + Marketing  Course  "
          subtitle="Learn how to professionally use Artificial Intelligence in your work. "
          firstparagraph="20 hours Mega Course with 9 Modules: "
          paragraphstick={[
            "The human element of AI",
            "AI for Text, Translation, and Email",
            "AI for Images, Social Media, and Ads",
            "AI for Audio, Video, and Podcasts",
            "AI for Content Strategy and SEO",
            "AI for Analytics, Forecasting, and Prediction",
            "AI For LinkedIn",
            "AI Tools",
            "Case Studies",
          ]}
        />
        <GetMegaCourseCard
          title="TikTok Video Creation & Edit   course"
          subtitle="Learn how to create cool videos that will have over 10,000 views in 24 hours. "
          firstparagraph="In collaboration with: "
          paragraphstick={[
            "Basic video editing",
            "Captions",
            "Sound effects",
            "Green screens",
            "Transitions and overlay",
            "Stock images, videos, sounds ( pexels, pixabay ) ",
            "Jump cuts ",
          ]}
          imgsrc={require("../../assets/images/nextgen' 1.png")}
        />
      </div>
    </div>
  );
};

export default GetMegaCourse;
