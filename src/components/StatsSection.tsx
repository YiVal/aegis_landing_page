import React from "react";
import "./StatsSectionStyles.css";

import { ReactComponent as StatCardImage } from "../assets/30.svg";
import { ReactComponent as ACTICON } from "../assets/ACT.svg";
import { ReactComponent as DMAICON } from "../assets/DMA.svg";
import { ReactComponent as GDPRICON } from "../assets/GDPR.svg";
import { ReactComponent as HIPAAICON } from "../assets/HIPAA.svg"; // Importing SVG correctly
import { ReactComponent as SOCICON } from "../assets/SOC.svg";

interface StatCardProps {
  icon: JSX.Element;
  title: string;
  rightBorder?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, rightBorder }) => {
  const rightBorderClass = rightBorder ? "border-r-custom" : "";

  return (
    <div
      className={`stat-card flex flex-col items-center text-center py-4 ${rightBorderClass}`}
    >
      {icon}
      <p className="text-sm text-gray-500 mt-4 py-2">{title}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const cards = [
    {
      icon: <SOCICON className="w-17 h-17" />,
      title: "SOC 2 (Service Organization Control 2)",
      rightBorder: true,
    },
    {
      icon: <GDPRICON className="w-17 h-17" />,
      title: "General Data Protection Regulation (GDPR)",
      rightBorder: true,
    },
    {
      icon: <HIPAAICON className="w-17 h-17" />,
      title: "Health Insurance Portability and Accountability Act (HIPAA)",
      rightBorder: false,
    },
    {
      icon: <ACTICON className="w-17 h-17" />,
      title: "California Consumer Privacy Act (CCPA)",
      rightBorder: true,
    },
    {
      icon: <DMAICON className="w-17 h-17" />,
      title: "Digital Markets Act (DMA)",
    },
  ];

  return (
    <div id="stats" className="stats-section bg-gray-100 mt-48 relative">
      <div className="flex justify-center items-center py-8">
        <div className="text-4xl text-left ml-12 mr-17">
          Data Compliance Without the Headache
        </div>
        <div className="text-lg text-left text-gray-500 ml-40">
          Our solution is designed to meet the compliance requirements of most
          major data protection and privacy regulations
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <StatCard
            key={index}
            icon={card.icon}
            title={card.title}
            rightBorder={card.rightBorder}
          />
        ))}
      </div>
      <StatCardImage
        className="absolute bottom-0 right-36 w-[40%] h-[60%] mt-8"
        style={{
          marginTop: "32px", // Adds margin top of 20px
        }}
      />
    </div>
  );
};

export default StatsSection;
