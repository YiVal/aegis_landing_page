import React from "react";

import { ReactComponent as ScienceIcon } from "../assets/ai-science.svg";
import { ReactComponent as PriceIcon } from "../assets/prize.svg";
import { ReactComponent as UserIcon } from "../assets/user.svg";

interface StatCardProps {
  icon: JSX.Element;
  title: string;
  value: string | number;
  rightBorder?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  value,
  rightBorder,
}) => {
  const borderClass = rightBorder ? "border-r border-gray-300" : ""; // Conditionally set border class
  return (
    <div
      className={`flex flex-col items-center w-full text-center py-4 ${borderClass}`}
    >
      {icon}
      <p className="text-sm text-gray-500 py-2">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const cards: StatCardProps[] = [
    {
      icon: <UserIcon className="w-16 h-16" />,
      title: "Registered users",
      value: "124",
    },
    {
      icon: <ScienceIcon className="w-16 h-16" />,
      title: "Essays generated",
      value: "11,238",
    },
    {
      icon: <PriceIcon className="w-16 h-16" />,
      title: "IB teachers recommend",
      value: "98%",
      rightBorder: false,
    },
  ];

  return (
    <div id="stats" className="py-8 px-36 mt-24 text-center bg-gray-100">
      <div className="flex flex-row justify-center items-center py-8">
        <div className="text-3xl mr-4">
          Amplifying Student Voices: The Power of Storytelling
        </div>
        <div className="text-lg ml-4">
          We can actively help students effectively tell their story in a
          <span className="text-blue-500"> more engaging way</span> and make
          their
          <span className="text-blue-500"> voice more audible</span>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        {cards.map((card, index) => (
          <StatCard
            key={index}
            icon={card.icon}
            title={card.title}
            value={card.value}
            rightBorder={card.rightBorder ?? true}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
