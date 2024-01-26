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
    <div className={`w-full sm:w-1/3 text-center p-4 ${borderClass}`}>
      {" "}
      {/* Use borderClass here */}
      <div className="flex flex-col items-center">
        {icon}
        <p className="text-sm text-gray-500 py-2">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const cards: StatCardProps[] = [
    {
      icon: <UserIcon className="w-15 h-15" />,
      title: "Registered users",
      value: "124",
    },
    {
      icon: <ScienceIcon className="w-15 h-15" />,
      title: "Essays generated",
      value: "11,238",
    },
    {
      icon: <PriceIcon className="w-15 h-15" />,
      title: "IB teachers recommend",
      value: "98%",
      rightBorder: false,
    },
  ];

  return (
    <div className="py-8 px-36 text-center bg-gray-100">
      <div className="flex flex-row justify-center items-center space-x-4 py-8">
        <h4 className="text-3xl">
          Amplifying Student Voices: The Power of Storytelling
        </h4>
        <p className="text-lg">
          We can actively help students effectively tell their story in a
          <span className="text-blue-500"> more engaging way</span> and make
          their
          <span className="text-blue-500"> voice more audible</span>
        </p>
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
