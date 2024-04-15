import React from "react";

import { ReactComponent as BackgroundImage } from "../assets/3D Morph Lines 12.svg";

const HeroSection: React.FC = () => {
  return (
    <div
      id="hero"
      className="hero-section flex flex-col bg-bgblue min-h-screen sm:py-8 sm:px-6 md:py-12 md:px-12 lg:px-36 text-xs mt-0 mb-24 relative"
    >
      <div className="flex text-center justify-center my-8">
        <div className="text-xl sm:text-3xl md:text-5xl text-white font-bold sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
          The Most Secure Way for Your Employees to use ChatGPT
        </div>
      </div>
      <div className="flex text-center justify-center py-4">
        <div className="text-xs sm:text-sm md:text-base text-white sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
          Productivity, Compliance, Privacy, Trust & Safety
        </div>
      </div>
      {/* SVG Container - consider if responsiveness is needed for the SVG as well */}
      <div className="absolute bottom-0 left-0 w-full h-auto z-0">
        <BackgroundImage className="w-full h-full" />
      </div>
      <a
        href="https://airtable.com/appfrX6dbb3c6baEz/shrIGfNTAY2PRcEFv"
        className="flex justify-center bg-white mt-8 mx-auto text-bgblue py-2 px-4 sm:text-sm md:px-6 my-4 rounded hover:bg-blue-700 hover:text-white relative z-10"
        target="_blank"
        rel="noopener noreferrer"
      >
        Start for Free
      </a>
    </div>
  );
};

export default HeroSection;
