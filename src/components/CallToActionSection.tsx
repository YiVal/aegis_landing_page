import React from "react";

const CallToActionSection: React.FC = () => {
  return (
    <div className="bg-yellow-300 px-64 py-28 flex justify-center items-center flex-col">
      <h2 className="text-4xl font-bold text-center mb-4">
        Compose your initial essay draft today.
      </h2>

      <a
        href="/free"
        className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <span>Start for Free</span>
        {/* You can include an SVG or icon here for the arrow */}
      </a>
    </div>
  );
};

export default CallToActionSection;
