import React from "react";

import { ReactComponent as Chat1Image } from "../assets/ARR chat.svg";
import { ReactComponent as InvoiceImage } from "../assets/invoice.svg";
import { ReactComponent as Chat2Image } from "../assets/payment chat.svg";

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
        Boost privacy with Aegis for secure ChatGPT interactions.
      </h2>

      {/* Content */}
      <div
        className="flex justify-center items-start mt-8 w-full"
        style={{ gap: "16px" }}
      >
        {" "}
        {/* Adjust the gap here */}
        {/* Left Section for Chat SVGs */}
        <div
          className="flex flex-col justify-start items-center flex-grow"
          style={{ maxHeight: "100%" }}
        >
          <Chat1Image
            className="w-full"
            style={{ height: "50%", maxHeight: "300px" }}
          />
          <Chat2Image
            className="w-full"
            style={{ height: "50%", maxHeight: "300px" }}
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
    </div>
  );
};

export default ScreenSection;
