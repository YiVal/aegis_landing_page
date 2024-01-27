import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div id="hero" className="flex flex-col py-12 px-36 text-xs">
      <div className="bg-white flex rounded-full mx-auto">
        <div className="font-bold text-white p-1 bg-black rounded-full">
          New
        </div>
        <div className="p-1">Guide to visually impressive essays! 🎉</div>
      </div>
      <div className="flex text-center justify-center my-8">
        <div className="text-5xl font-bold max-w-3xl">
          5-Minute STEM Essays: Plagiarism-Free
        </div>
      </div>
      <div className="flex text-center justify-center py-4">
        <div className="text-sm text-gray-500 max-w-72">
          The easy way to write a well-researched and informative STEM essay
        </div>
      </div>
      <a
        href="/start"
        className="flex justify-center bg-blue-600 mx-auto text-white py-2 text-sm px-6 my-4 rounded hover:bg-blue-700"
      >
        Start for Free
      </a>
      <img
        src="/images/stem-essay.gif"
        alt="StemEssay"
        className="mx-auto flex justify-center my-8"
      />
    </div>
  );
};

export default HeroSection;
