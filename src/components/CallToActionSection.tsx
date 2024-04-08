import React from "react";

const CallToActionSection: React.FC = () => {
  return (
    <div className="bg-yellow-300 px-36 py-28 mt-36 flex items-center flex-col gap-4">
      <div className="text-4xl font-bold text-center">
        Compose your initial essay draft today.
      </div>
      <a
        href="https://airtable.com/appfrX6dbb3c6baEz/shrIGfNTAY2PRcEFv"
        className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded flex items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Start for Free</span>
      </a>
    </div>
  );
};

export default CallToActionSection;
