import React from "react";

//import ReactPlayer from "react-player";
import videoSrc from "../assets/Kakuvideo.mp4";

const HeroSection: React.FC = () => {
  return (
    <div id="hero" className="flex flex-col py-12 px-36 text-xs mt-16 ">
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
        href="https://airtable.com/appfrX6dbb3c6baEz/shrIGfNTAY2PRcEFv"
        className="flex justify-center bg-blue-600 mx-auto text-white py-2 text-sm px-6 my-4 rounded hover:bg-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        Start for Free
      </a>
      <video
        controls
        autoPlay
        muted
        loop
        height={640}
        className="mx-auto flex justify-center my-8"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Insert an empty line here */}
    </div>
  );
};

export default HeroSection;
