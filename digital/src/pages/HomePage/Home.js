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

const Home = () => {
  return (
    <div className="maindiv">
      <TopHeader />
      <SecondTopHeader />
      <Header />
      <Hero />
      <InformationComponent />
      <OffersComponent />
      <ProgramComponent />
      <PracticeComponent />
      <TestimonialsComponent />
      <EarningComponent />
      <HiringComponent />
      <Diploma />
      <Recruiter/>
    </div>
  );
};

export default Home;
