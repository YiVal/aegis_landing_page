import React from "react";

import CallToActionSection from "../../components/CallToActionSection";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
//import ProgramsSection from "../../components/ProgramsSection";
import SecurityUseSection from "../../components/SecurityUseSection";
import StatsSection from "../../components/StatsSection";
import TopBar from "../../components/TopBar";

const LandingPage: React.FC = () => {
  return (
    <>
      <TopBar />
      <HeroSection />
      <StatsSection />
      <SecurityUseSection />
      <CallToActionSection />
      <Footer />
    </>
  );
};

export default LandingPage;
