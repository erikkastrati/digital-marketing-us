import React from "react";
import "../HomePage/Home.css";
import TopHeader from "../../components/TopHeaderComponent/TopHeader";
import SecondTopHeader from "../../components/SecondTopHeaderComponent/SecondTopHeader";
import Header from "../../components/HeaderComponent/Header";
import Hero from "../../components/HeroComponent/Hero";
import InformationComponent from "../../components/InformationComponent/InformationComponent";
import OffersComponent from "../../components/OffersComponent/OffersComponent";
import ProgramComponent from "../../components/ProgramComponent/ProgramComponent";
import PracticeComponent from "../../components/PracticeComponent/PracticeComponent";
import TestimonialsComponent from "../../components/TestimonialsComponent/TestimonialsComponent";
import EarningComponent from "../../components/EarningComponent/EarningComponent";
import HiringComponent from "../../components/HiringComponent/HiringComponent";
import Diploma from "../../components/DiplomaComponent/Diploma";
import Recruiter from "../../components/1-on-1Recruiter/Recruiter";
// import Skill from "../../components/SkillComponent/Skill";
import BonusComponent from "../../components/BonusComponent/BonusComponent";
import GetMegaCourse from "../../components/Get+MegaCoursesComponent/GetMegaCourse";
import TeamMembersComponent from "../../components/TeamMembersComponent/TeamMembersComponent";
import HowToFinanceComponent from "../../components/HowToFinance/HowToFinanceComponent";
import SuccessStories from "../../components/SuccessStories/SuccessStories";
import Concept from "../../components/ConceptComponent/Concept";

const Home = () => {
  return (
    <div className="maindiv">
      <TopHeader />
      <SecondTopHeader />
      <Header />
      <Hero />
      <InformationComponent />
      <OffersComponent />
      <Concept />
      <ProgramComponent />
      <HiringComponent />
      <Diploma />
      <PracticeComponent />
      <TestimonialsComponent />
      <EarningComponent />
      <Recruiter />
      <GetMegaCourse />
      <BonusComponent />
      <TeamMembersComponent />
      <HowToFinanceComponent />
      <SuccessStories />
    </div>
  );
};

export default Home;
