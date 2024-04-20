import React from "react";

import logo10Icon from "../assets/logo 10.png";
import logo1Icon from "../assets/logo1.jpg";
import logo2Icon from "../assets/logo2.jpg"; // Now this is logo3
import logo3Icon from "../assets/logo3.jpg"; // Now this is logo2
import logo4Icon from "../assets/logo4.jpg"; // Now this is logo5
import { ReactComponent as Logo5Icon } from "../assets/logo5.svg"; // Now this is logo4
import logo6Icon from "../assets/logo6.jpg";
import logo7Icon from "../assets/logo7.jpg";
import logo8Icon from "../assets/logo8.jpg";
import logo9Icon from "../assets/logo9.png";

const ProgramsSection: React.FC = () => {
  const firstRow = [
    {
      src: logo1Icon,
      alt: "Logo 1",
      name: "Mymap.ai",
      style: { maxWidth: "90px", height: "80px" }, // Fixed height for image
    },
    {
      src: logo3Icon, // This was logo2Icon, now switched
      alt: "Logo 3", // Updated alt text
      name: "Flot.ai", // Updated name
      style: { maxWidth: "120px", height: "80px" }, // Fixed height for image
    },
    {
      src: logo2Icon, // This was logo3Icon, now switched
      alt: "Logo 2", // Updated alt text
      name: "Dymaxion", // Updated name
      style: { maxWidth: "68px", height: "80px" }, // Fixed height for image
    },
    {
      src: logo7Icon, // This was logo3Icon, now switched
      alt: "Logo 7", // Updated alt text
      name: "Drlambda.ai", // Updated name
      style: { maxWidth: "110px", height: "80px" }, // Fixed height for image
    },
  ];

  const secondRow = [
    {
      Icon: Logo5Icon, // This was logo4Icon, now switched
      alt: "Logo 4", // Updated alt text
      style: { maxWidth: "150px", height: "auto" },
    },
    {
      src: logo4Icon, // This was Logo5Icon, now switched
      alt: "Logo 5", // Updated alt text
      style: { maxWidth: "140px", height: "auto", borderRadius: "10px" },
    },
    {
      src: logo6Icon,
      alt: "Logo 6",
      style: { maxWidth: "110px", height: "auto" },
    },
    {
      src: logo8Icon,
      alt: "Logo 8",
      style: { maxWidth: "150px", height: "auto" },
    },
    {
      src: logo9Icon,
      alt: "Logo 9",
      style: { maxWidth: "110px", height: "auto", borderRadius: "10px" },
    },
    {
      src: logo10Icon,
      alt: "Logo 10",
      style: { maxWidth: "150px", height: "auto", borderRadius: "10px" },
    },
  ];

  return (
    <div
      id="program"
      className="px-36 mt-0 flex flex-col items-center text-lg"
      style={{ backgroundColor: "#1D0F741A", height: "380px" }}
    >
      <div className="text-center text-gray-600 py-4 mt-8">
        We Are Trusted by
      </div>
      <div className="flex justify-center gap-24 mb-8 mt-8">
        {firstRow.map((logo) => (
          <div key={logo.alt} className="flex flex-col items-center">
            <img
              src={logo.src}
              alt={logo.alt}
              style={logo.style}
              className="object-contain mb-2"
            />
            <span className="text-gray-700 text-bold text-sm">{logo.name}</span>
          </div>
        ))}
      </div>
      <div
        className="flex justify-center gap-6"
        style={{ alignItems: "center" }}
      >
        {secondRow.map((logo) =>
          logo.Icon ? (
            <div
              key={logo.alt}
              className="flex justify-center items-center"
              style={{ height: "90px" }}
            >
              <logo.Icon style={logo.style} />
            </div>
          ) : (
            <div
              key={logo.alt}
              className="flex justify-center items-center"
              style={{ height: "90px" }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={logo.style}
                className="object-contain mb-2"
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default ProgramsSection;
