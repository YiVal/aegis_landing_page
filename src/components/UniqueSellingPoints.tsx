import React from "react";

import FrameSvg from "../assets/frame.svg";
import GptSvg from "../assets/gpt.svg";
import GunnarSvg from "../assets/gunnar.svg";
import { ReactComponent as CheckmarkIcon } from "../assets/mark.svg";

const comparisonData = [
  {
    titleComponent: (
      <a href="#topbar" className="flex flex-row justify-start h-8 w-auto">
        <img src={FrameSvg} alt="Logo" />
        <span className="text-xl font-semibold">STEM Essay!</span>
      </a>
    ),
    points: [
      "Fully affordable with $30 to generate a full essay with data, tables, codes, and graphs all included",
      "Fully controllable by you, simply re-generate the results every time you are unsatisfied with it.",
      "Absolutely Plagiarism-free and GPT-free, passes all AI detection test",
    ],
    bgColor: "bg-purple-200", // Tailwind CSS background color
  },
  {
    titleComponent: (
      <img src={GunnarSvg} alt="Gunnar" className="h-12 w-auto" />
    ),
    points: [
      "Charged $30 per single page, plus extra fees on tables and graphs",
      "Need to go back and forth with the writer on the topics, outlines, etc",
      "Plagiarism risks as the gunner might loaf on the job",
    ],
    bgColor: "bg-red-200", // Tailwind CSS background color
  },
  {
    titleComponent: <img src={GptSvg} alt="GPT" className="h-12 w-auto" />,
    points: [
      "Unable to produce multiple paragraphs",
      "Unable to produce consistent content throughout each section of the essay",
      "Can easily been detected as written by AI",
    ],
    bgColor: "bg-green-200", // Tailwind CSS background color
  },
];

const ComparisonSection: React.FC = () => {
  return (
    <div className="px-36 py-12 max-w-7xl mx-auto flex flex-col justify-center">
      <h2 className="text-3xl font-bold max-w-lg mx-auto text-gray-900 mb-8">
        What makes our products unique compared to competitors?
      </h2>
      <div className="flex flex-row">
        {comparisonData.map((product, index) => (
          <div
            key={index}
            className={`w-96 rounded-lg shadow-lg mx-4 flex flex-col justify-start ${product.bgColor}`}
          >
            <div className="h-24 px-6 flex items-center justify-start text-sm">
              {product.titleComponent}
            </div>
            <div className="bg-white p-4 h-72 rounded">
              <ul className="flex flex-col">
                {product.points.map((point) => (
                  <li
                    key={point}
                    className="text-gray-600 text-sm flex flex-row items-start py-2"
                  >
                    <CheckmarkIcon className="w-4 h-4 mr-2 mt-0.5 inline-block" />
                    <div className="w-52">{point}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonSection;
