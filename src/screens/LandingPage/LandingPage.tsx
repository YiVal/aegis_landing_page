import React from "react";

import CallToActionSection from "../../components/CallToActionSection";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
//import ProgramsSection from "../../components/ProgramsSection";
import ProgramsSection from "../../components/ProgramsSection";
import ScreenSection from "../../components/ScreenSection";
import SecurityUseSection from "../../components/SecurityUseSection";
import StatsSection from "../../components/StatsSection";
import TopBar from "../../components/TopBar";

const LandingPage: React.FC = () => {
  return (
    <>
      <TopBar />
      <HeroSection />
      <ProgramsSection />
      <StatsSection />
      <ScreenSection />
      <SecurityUseSection />
      <CallToActionSection />
      <Footer />
    </>
  );
};

export default LandingPage;
