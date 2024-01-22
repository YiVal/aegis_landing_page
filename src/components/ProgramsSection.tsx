import React from "react";

import apLogo from "../assets/ap.png"; // Replace with actual path to your image
import harvardLogo from "../assets/harvard.png"; // Replace with actual path to your image
import ibLogo from "../assets/ib.png"; // Replace with actual path to your image

const ProgramsSection: React.FC = () => {
  const cards = [
    {
      src: apLogo,
      alt: "Advanced Placement Program",
      text: "Advanced Placement Program (AP)",
    },
    {
      src: ibLogo,
      alt: "International Baccalaureate",
      text: "International Baccalaureate® (IB)",
    },
    {
      src: harvardLogo,
      alt: "Undergraduate Application Essay",
      text: "Undergraduate Application Essay",
    },
  ];

  return (
    <div className="py-2 flex flex-col">
      <div className="text-center text-sm text-gray-500 py-4">
        We support for most stem essay programs
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-end items-center text-center w-64 bg-white p-4 rounded shadow"
          >
            <img src={card.src} alt={card.alt} className="w-24 h-auto mb-3" />
            <span className="text-xs max-w-36 text-gray-900">{card.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsSection;
