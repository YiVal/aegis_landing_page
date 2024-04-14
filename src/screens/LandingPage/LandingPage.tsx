import React from "react";

import CallToActionSection from "../../components/CallToActionSection";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
//import ProgramsSection from "../../components/ProgramsSection";
import StatsSection from "../../components/StatsSection";
import TopBar from "../../components/TopBar";
import SecurityUseSection from "../../components/SecurityUseSection";

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
