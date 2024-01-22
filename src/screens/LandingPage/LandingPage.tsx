import React from "react";

import CallToActionSection from "../../components/CallToActionSection";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import PricingSection from "../../components/PricingSection";
import ProgramsSection from "../../components/ProgramsSection";
import StatsSection from "../../components/StatsSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import TopBar from "../../components/TopBar";
import UniqueSellingPoints from "../../components/UniqueSellingPoints";

const LandingPage: React.FC = () => {
  return (
    <>
      <TopBar />
      <HeroSection />
      <ProgramsSection />
      <StatsSection />
      <UniqueSellingPoints />
      <PricingSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </>
  );
};

export default LandingPage;
