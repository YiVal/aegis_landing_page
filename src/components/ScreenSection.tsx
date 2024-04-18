import React from "react";

import { ReactComponent as Chat1Image } from "../assets/chat email.svg";
import { ReactComponent as Chat3Image } from "../assets/chat invoice.svg";
import { ReactComponent as Chat2Image } from "../assets/chat price.svg";
import { ReactComponent as InvoiceImage } from "../assets/invoice.svg";
import processImage from "../assets/secure process.jpg";

const ScreenSection: React.FC = () => {
  return (
    <div
      className="screen-section flex flex-col items-center bg-gray-100 py-12 px-36 text-xs"
      style={{
        width: "100%",
      }}
    >
      {/* Title */}
      <h2 className="font-semibold text-4xl text-center text-gray-900 mt-16 mb-8">
        Responsible AI : Boost privacy with Aegis for secure ChatGPT
        interactions.
      </h2>

      {/* Content */}
      <div
        className="flex justify-center items-start mt-8 w-full"
        style={{ gap: "16px" }} // Adjust the gap here
      >
        {/* Left Section for Chat SVGs */}
        <div
          className="flex flex-col justify-start items-center flex-grow"
          style={{ maxHeight: "600px" }} // Adjusted to accommodate three SVGs
        >
          <Chat1Image
            className="w-full"
            style={{ height: "31%", maxHeight: "200px" }}
          />
          <Chat2Image
            className="w-full"
            style={{ height: "31%", maxHeight: "200px" }}
          />
          <Chat3Image // Added third chat SVG
            className="w-full"
            style={{ height: "31%", maxHeight: "200px" }}
          />
        </div>

        {/* Right Section for Invoice SVG */}
        <div className="flex-grow" style={{ maxHeight: "600px" }}>
          <InvoiceImage
            className="w-full h-full"
            style={{ maxHeight: "600px" }}
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="font-semibold text-4xl text-center text-gray-900 mt-48 mb-8">
        Easy-to-integrate solutions that ensure data never leaves your company.
      </h2>

      {/* Process Image */}
      <div className="mt-8 w-full" style={{ maxWidth: "calc(100% - 30px)" }}>
        {" "}
        {/* Adjust for the padding from the sides */}
        <img
          src={processImage}
          alt="Secure Process"
          className="w-full object-cover"
          style={{ height: "auto", borderRadius: "10px" }} // Added border-radius
        />
      </div>
    </div>
  );
};

export default ScreenSection;
