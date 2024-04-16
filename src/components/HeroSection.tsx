import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as BackgroundImage } from "../assets/3D Morph Lines 12.svg";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      id="hero"
      className="hero-section flex flex-col bg-bgblue py-12 px-36 text-xs mt-0 mb-24 relative"
      style={{
        width: "100%",
        height: "640px",
      }}
    >
      <div className="flex text-center justify-center my-8">
        <div className="text-5xl text-white font-bold max-w-3xl">
          The Most Secure Way for Your Employees to use ChatGPT
        </div>
      </div>
      <div className="flex text-center justify-center py-4">
        <div className="text-sm text-white max-w-80">
          Productivity, Compliance, Privacy, Trust & Safety
        </div>
      </div>
      {/* SVG Container */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "408px", // set to original SVG height or use a percentage
          zIndex: 1,
        }}
      >
        <BackgroundImage style={{ width: "100%", height: "100%" }} />
      </div>
      <button
        onClick={() => navigate("/demo")}
        className="flex justify-center bg-white mt-8 mx-auto text-bgblue py-2 text-sm px-6 my-4 rounded hover:bg-blue-700 hover:text-white"
        style={{ position: "relative", zIndex: 10 }}
      >
        Book a demo
      </button>
    </div>
  );
};

export default HeroSection;
