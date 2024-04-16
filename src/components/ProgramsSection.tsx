import React from "react";

import logo1Icon from "../assets/logo1.jpg";
import logo2Icon from "../assets/logo2.jpg";
import logo3Icon from "../assets/logo3.jpg";
import logo4Icon from "../assets/logo4.jpg";
import { ReactComponent as Logo5Icon } from "../assets/logo5.svg";

const ProgramsSection: React.FC = () => {
  const firstRow = [
    {
      src: logo1Icon,
      alt: "Logo 1",
      style: { maxWidth: "90px", height: "auto" },
    },
    {
      src: logo2Icon,
      alt: "Logo 2",
      style: { maxWidth: "76px", height: "auto" },
    },
    {
      src: logo3Icon,
      alt: "Logo 3",
      style: { maxWidth: "96px", height: "auto" },
    },
  ];

  const secondRow = [
    {
      src: logo4Icon,
      alt: "Logo 4",
      style: { maxWidth: "200px", height: "auto" },
    },
    {
      Icon: Logo5Icon,
      alt: "Logo 5",
      style: { maxWidth: "200px", height: "auto" },
    },
  ];

  return (
    <div
      id="program"
      className="px-36 mt-0 flex flex-col items-center text-1xl"
      style={{ backgroundColor: "#1D0F741A", height: "380px" }}
    >
      <div className="text-center text-gray-600 py-4 mt-8 ">
        We Are Trusted by
      </div>
      <div className="flex justify-center gap-32 mb-8 mt-8">
        {" "}
        {/* Adjusted gap for first row */}
        {firstRow.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            style={logo.style}
            className="object-contain"
          />
        ))}
      </div>
      <div className="flex justify-center gap-44">
        {" "}
        {/* Adjusted gap for second row */}
        {secondRow.map((logo) =>
          logo.Icon ? (
            <logo.Icon key={logo.alt} style={logo.style} />
          ) : (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              style={logo.style}
              className="object-contain"
            />
          ),
        )}
      </div>
    </div>
  );
};

export default ProgramsSection;
