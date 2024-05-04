import React from "react";

import logo10Icon from "../assets/logo 10.png";
import logo1Icon from "../assets/logo1.jpg";
import logo11Icon from "../assets/logo11.png";
import logo2Icon from "../assets/logo2.jpg";
import logo3Icon from "../assets/logo3.jpg";
import logo4Icon from "../assets/logo4.jpg";
import { ReactComponent as Logo5Icon } from "../assets/logo5.svg";
import logo6Icon from "../assets/logo6.jpg";
import logo7Icon from "../assets/logo7.jpg";
import logo8Icon from "../assets/logo8.jpg";
import logo9Icon from "../assets/logo9.png";

import "./programscrolling.css";

const ProgramsSection = () => {
  const logos = [
    {
      src: logo1Icon,
      alt: "Logo 1",
      name: "Mymap.ai",
      style: { maxWidth: "90px", height: "80px" },
    },
    {
      src: logo3Icon,
      alt: "Logo 3",
      name: "Flot.ai",
      style: { maxWidth: "120px", height: "80px" },
    },
    {
      src: logo2Icon,
      alt: "Logo 2",
      name: "Dymaxion",
      style: { maxWidth: "68px", height: "80px" },
    },
    {
      src: logo11Icon,
      alt: "Logo 11",
      name: "AI Geometric",
      style: { maxWidth: "70px", height: "80px", borderRadius: "20px" },
    },
    {
      src: logo7Icon,
      alt: "Logo 7",
      name: "Drlambda.ai",
      style: { maxWidth: "110px", height: "80px" },
    },
    {
      Icon: Logo5Icon,
      alt: "Logo 4",
      style: { maxWidth: "150px", height: "auto" },
    },
    {
      src: logo4Icon,
      alt: "Logo 5",
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
      <div className="logo-container">
        {logos.map((logo) => (
          <div key={logo.alt} className="logo-item flex flex-col items-center">
            {logo.Icon ? (
              <logo.Icon style={logo.style} />
            ) : (
              <img
                src={logo.src}
                alt={logo.alt}
                style={logo.style}
                className="object-contain mb-2"
              />
            )}
            {logo.name && (
              <span className="text-gray-700 text-bold text-sm">
                {logo.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsSection;
