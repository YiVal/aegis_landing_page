import React from "react";

import stemIcon from "../assets/stem.svg";

type PlanHeader = {
  planName: string | React.ReactNode;
  planPrice?: string;
  planLink?: string; // Assuming this is a link to the plan details or sign-up
};

const tableHeaders: PlanHeader[] = [
  {
    planName: (
      <div>
        <img src={stemIcon} alt="Free Plan" />
      </div>
    ),
  },
  {
    planName: "Free",
    planPrice: "$0/mo billed annually",
    planLink: "/free-plan",
  },
  {
    planName: "PRO",
    planPrice: "$29.9/mo billed annually",
    planLink: "/pro-plan",
  },
  {
    planName: "GOD mode",
    planPrice: "$49.9/mo billed annually",
    planLink: "/god-plan",
  },
  {
    planName: "Enterprise",
    planPrice: "Custom quote",
    planLink: "/contact-us",
  },
];

type FeatureDetails = {
  featureCategory: string; // New property for the category of the feature
  free: string[];
  pro: string[];
  godMode: string[];
  enterprise: string[];
};

const tableBodyData: FeatureDetails[] = [
  {
    featureCategory: "Includes", // Same group for support
    free: ["N/A"],
    pro: ["N/A"],
    godMode: ["Included"],
    enterprise: ["N/A"],
  },
  {
    featureCategory: "Essay Topic Generation", // New group label
    free: ["20 credits"],
    pro: ["Free"],
    godMode: ["Free"],
    enterprise: ["Free"],
  },
  {
    featureCategory: "Essay Outline Generation", // New group label
    free: ["30 credits"],
    pro: ["30 credits"],
    godMode: ["Free"],
    enterprise: ["Free"],
  },
  {
    featureCategory: "Essay Writing", // Group for Essay Writing 200 credits
    free: ["200 credits"],
    pro: ["Free"],
    godMode: ["Free"],
    enterprise: ["Free"],
  },
  {
    featureCategory: "Essay Writing", // Same group for Essay Writing 1000 credits
    free: ["1000 credits"],
    pro: ["1000 credits"],
    godMode: ["1000 credits"],
    enterprise: ["1000 credits"],
  },
];

const PricingSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-green-900 px-36 py-16">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-3xl font-semibold text-white">Compare plans</h2>
        <p className="text-sm text-gray-400">
          We recommend building a plan that works best for you.
        </p>
      </div>
      <div className="w-full">
        <table className="min-w-full divide-y divide-gray-200 border-gray-200 rounded-lg border-b">
          <thead className="bg-gray-700">
            <tr>
              {tableHeaders.map((header, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  {header.planName}
                  <br />
                  {header.planPrice}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {tableBodyData.map((feature, i) => (
              <tr key={i}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {feature.featureCategory}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {feature.free.join(", ")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {feature.pro.join(", ")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {feature.godMode.join(", ")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {feature.enterprise.join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingSection;
