import React from "react";

import stemEssayImage from "../assets/stem-essay.gif"; // Path to your GIF

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center py-8">
      <div className="bg-white p-0.5 inline-flex items-center space-x-2 rounded-full mx-auto ">
        <span className="text-xs font-bold text-white px-2 py-1 bg-black rounded-full">
          New
        </span>
        <span className="text-xs font-medium text-black">
          Guide to visually impressive essays! 🎉
        </span>
      </div>
      <div className="flex items-center text-center justify-center py-4">
        <span className="text-5xl font-bold mb-4 max-w-3xl">
          5-Minute STEM Essays: Plagiarism-Free
        </span>
      </div>
      <div className="flex items-center text-center justify-center py-4">
        <span className="text-sm text-gray-500 max-w-72">
          The easy way to write a well-researched and informative STEM essay
        </span>
      </div>
      <div className="flex justify-center py-4">
        <a
          href="/start"
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Start for Free
        </a>
      </div>
      <div className="flex justify-center p-8">
        <img src={stemEssayImage} alt="StemEssay" className="mx-auto mb-8" />
      </div>
    </div>
  );
};

export default HeroSection;
