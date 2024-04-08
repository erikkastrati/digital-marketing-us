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
        <GetMegaCourseCard
          title="SEO  Course"
          subtitle="Learn how to optimize websites that rank on page #1 on Google or other search engines.  "
          firstparagraph="In this  Advanced course you will:  "
          paragraphstick={[
            "Learn how to do detailed keyword research and understand keyword relevance, competition and targeting",
            "Learn how to use Technical SEO principles (crawling, indexing of websites, site speed, mobile optimization, sitemap and robots)",
            "Learn how to use Google Search Console (including to add and verify property and to identify issues on a website)",
            "Learn how to use On-Page SEO principles (content optimization, keyword research, heading structure, image optimization, meta descriptions, outbound and inbound links)",
            "Learn how to use Off-Page SEO ( link building strategy including backlinks)",
            "Learn how to able to analyze traffic from  UA ( set up goals and events)",
            "Learn how to able to create an SEO Site Audit for a given company on their own",
          ]}
        />
        <GetMegaCourseCard
          title="COLD OUTREACH AND LEAD GEN  COURSE"
          subtitle="Learn how to generate prospects/leads for any type of business. "
          firstparagraph="In this  Advanced course you will:  "
          paragraphstick={[
            "Understand what is Lead Generation (responsibilities, types, broad overview)",
            "Identify the concepts of a good Email Campaign",
            "Be able to use Cold Email Outreach - meaning of product / pain points / prompts for using ChatGPT",
            "Select Data Providers for Cold Email Campaigns - Identify What are you selling / Influencers / Ecom stores / Apollo / Intention database",
            "Learn how to do scraping and extraction",
            "Learn how to clean Email Lists in order to build effective campaigns using Scrubby ",
          ]}
        />
      </div>
    </div>
  );
};

export default GetMegaCourse;
