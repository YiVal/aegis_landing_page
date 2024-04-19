import React from "react";

import { ReactComponent as AmazonIcon } from "../assets/amazon.svg";
import { ReactComponent as GoogleIcon } from "../assets/Google.svg";
import { ReactComponent as LinkedinIcon } from "../assets/LinkedIn.svg";
import { ReactComponent as MicroIcon } from "../assets/Microsoft.svg";
import { ReactComponent as TiktokIcon } from "../assets/tiktok.svg";

const CompanySection: React.FC = () => {
  const companies = [
    {
      Icon: AmazonIcon,
      name: "Amazon",
      color: "#FF9900", // Amazon color
    },
    {
      Icon: GoogleIcon,
      name: "Google",
      color: "#4285F4", // Google color
    },
    {
      Icon: TiktokIcon,
      name: "TikTok",
      color: "#000000", // TikTok color
    },
    {
      Icon: MicroIcon,
      name: "Microsoft",
      color: "#F25022", // Microsoft color
    },
    {
      Icon: LinkedinIcon,
      name: "LinkedIn",
      color: "#0077B5", // LinkedIn color
    },
  ];

  const iconBackgroundStyle = {
    height: "55px",
    width: "55px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginRight: "10px",
  };

  return (
    <div
      style={{
        //backgroundColor: "#1D0F7424",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 0",
        width: "100%",
      }}
    >
      <h2 className="text-center text-gray-700 mb-12" style={{ width: "100%" }}>
        Built By AI, Privacy & Safety Experts From Companies That Care Deeply
        About Privacy.
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {companies.map((company, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row", // Adjusted from column to row
              alignItems: "center", // Center align the items vertically
              marginRight: "60px",
              marginBottom: "20px",
            }}
          >
            <div style={iconBackgroundStyle}>
              <company.Icon style={{ height: "36px", width: "36px" }} />
            </div>
            <span
              style={{
                color: company.color,
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {company.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanySection;
