import React, { useState, useEffect } from "react";
import "../HomePage/Home.css";
import TopHeader from "../../components/TopHeaderComponent/TopHeader";
import SecondTopHeader from "../../components/SecondTopHeaderComponent/SecondTopHeader";
import Header from "../../components/HeaderComponent/Header";
import Hero from "../../components/HeroComponent/Hero";
import InformationComponent from "../../components/InformationComponent/InformationComponent";
import OffersComponent from "../../components/OffersComponent/OffersComponent";
import Concept from "../../components/ConceptComponent/Concept.js";
import ConceptMobile from "../../components/ConceptMobileComponent/ConceptMobile.js";
import ProgramComponent from "../../components/ProgramComponent/ProgramComponent";
import PracticeComponent from "../../components/PracticeComponent/PracticeComponent";
import TestimonialsComponent from "../../components/TestimonialsComponent/TestimonialsComponent";
import EarningComponent from "../../components/EarningComponent/EarningComponent";
import HiringComponent from "../../components/HiringComponent/HiringComponent";
import Diploma from "../../components/DiplomaComponent/Diploma";
import Recruiter from "../../components/1-on-1Recruiter/Recruiter";
import BonusComponent from "../../components/BonusComponent/BonusComponent";
import GetMegaCourse from "../../components/Get+MegaCoursesComponent/GetMegaCourse";
import TeamMembersComponent from "../../components/TeamMembersComponent/TeamMembersComponent";
import HowToFinanceComponent from "../../components/HowToFinance/HowToFinanceComponent";
import SuccessStories from "../../components/SuccessStories/SuccessStories";
import SecureChance from "../../components/SecureChance/SecureChance";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import SimpleSlider from "../../components/SliderComponent/SimpleSlider";
import { teamMembers } from "../../utils/dummydata.js";
import SuccessSlider from "../../components/SuccessStoriesSlider/SuccessSlider.js";
import TestimonialSlider from "../../components/TestimonialsSlider/TestimonialSlider.js";
import InformationSlider from "../../components/InformationSliderComponent/InformationSlider.js";
const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <div className="maindiv">
      <TopHeader />
      <SecondTopHeader />
      <Header />
      <Hero />
      {isMobile ? <InformationSlider /> : <InformationComponent />}
      <OffersComponent />
      {isMobile ? <ConceptMobile /> : <Concept />}
      <ProgramComponent />
      <HiringComponent />
      <Diploma />
      <PracticeComponent />
      {isMobile ? <TestimonialSlider /> : <TestimonialsComponent />}
      {/* <TestimonialsComponent /> */}
      <EarningComponent />
      <Recruiter />
      <GetMegaCourse />
      <BonusComponent />
      {isMobile ? (
        <SimpleSlider members={teamMembers} />
      ) : (
        <TeamMembersComponent />
      )}
      <HowToFinanceComponent />
      {isMobile ? <SuccessSlider /> : <SuccessStories />}
      <SecureChance />
      <FooterComponent />
    </div>
  );
};

export default Home;
