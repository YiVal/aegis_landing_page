import React from "react";

const CallToActionSection: React.FC = () => {
  return (
    <div className="bg-yellow-300 p-10 flex justify-center items-center flex-col">
      {/* Replace the image paths with the correct ones for your project */}

      <h2 className="text-4xl font-bold text-center mb-4">
        Compose your initial essay draft today.
      </h2>

      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
        <span>Start for Free</span>
        {/* You can include an SVG or icon here for the arrow */}
      </button>
    </div>
  );
};

export default CallToActionSection;
