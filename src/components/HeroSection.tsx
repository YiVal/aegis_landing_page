import React, { useEffect } from "react";

import { ReactComponent as BackgroundImage } from "../assets/3D Morph Lines 12.svg";

// Define the interface for the Calendly object
interface CalendlyInterface {
  initPopupWidget: (config: { url: string }) => void;
}

// Declare global Calendly interface to extend window object
declare global {
  interface Window {
    Calendly: CalendlyInterface;
  }
}

const HeroSection: React.FC = () => {
  useEffect(() => {
    // Dynamically load the Calendly CSS and script
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up function to remove the script and link when component unmounts
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="hero"
      className="hero-section flex flex-col bg-bgblue py-12 px-36 text-xs mt-0 relative"
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
          height: "408px",
          zIndex: 1,
        }}
      >
        <BackgroundImage style={{ width: "100%", height: "100%" }} />
      </div>
      {/* Calendly link widget */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.Calendly.initPopupWidget({
            url: "https://calendly.com/tryaegis/30min",
          });
          return false;
        }}
        className="flex justify-center bg-white mt-8 mx-auto text-bgblue py-2 text-sm px-6 my-4 rounded hover:bg-blue-700 hover:text-white"
        style={{ position: "relative", zIndex: 10 }}
      >
        Book a demo
      </a>
    </div>
  );
};

export default HeroSection;
