import React from "react";
// Only import the SVG as a React component
import { ReactComponent as BackgroundImage } from "../assets/3D Morph Lines 12.svg";

const HeroSection: React.FC = () => {
  return (
    <div
      id="hero"
      className="hero-section flex flex-col bg-bgblue py-12 px-36 text-xs mt-0 mb-24"
      style={{
        width: '100%', // Changed from 1440px to 100% for responsive design
        height: '640px', 
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
      {/* Use SVG as a React component directly */}
      <BackgroundImage
        style={{
          position: 'absolute',
          bottom: 0, // Aligns the image to the bottom of the hero section
          left: 0, // Aligns the image to the left of the hero section
          width: '100%', // Ensures the image spans the width of the hero section
          height: 'auto' // Adjust height to maintain aspect ratio
        }}
      />
      <a
        href="https://airtable.com/appfrX6dbb3c6baEz/shrIGfNTAY2PRcEFv"
        className="flex justify-center bg-white mt-8 mx-auto text-bgblue py-2 text-sm px-6 my-4 rounded hover:bg-blue-700 hover:text-white"
        style={{ position: 'relative', zIndex: 10 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Start for Free
      </a>
    </div>
  );
};

export default HeroSection;


