import React from "react";

import { ReactComponent as CheckmarkIcon } from "../assets/mark_s.svg";
import stemIcon from "../assets/stem.svg";

type PlanHeader = {
  planName: string | React.ReactNode;
  planPrice?: string;
  planLink?: string; // Assuming this is a link to the plan details or sign-up
};

type PlanType = "free" | "pro" | "godMode" | "enterprise";

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
    free: ["250 credits", "Usage of GPT-3.5"],
    pro: ["1000 credits", "Usage of GPT-4"],
    godMode: ["2000 credits", "Usage of GPT-4", "24 hour VIP Support"],
    enterprise: [],
  },
  {
    featureCategory: "Essay Topic Generation", // New group label
    free: ["20 credits"],
    pro: ["Free"],
    godMode: ["Free"],
    enterprise: [],
  },
  {
    featureCategory: "Essay Outline Generation", // New group label
    free: ["30 credits"],
    pro: ["30 credits"],
    godMode: ["Free"],
    enterprise: [],
  },
  {
    featureCategory: "Essay Writing", // Group for Essay Writing 200 credits
    free: ["200 credits"],
    pro: ["Free"],
    godMode: ["Free"],
    enterprise: [],
  },
  {
    featureCategory: "Essay Writing", // Same group for Essay Writing 1000 credits
    free: ["1000 credits"],
    pro: ["1000 credits"],
    godMode: ["1000 credits"],
    enterprise: [],
  },
];

const PricingSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 px-36 py-16">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-3xl font-semibold text-white">Compare plans</h2>
        <p className="text-sm text-gray-400">
          We recommend building a plan that works best for you.
        </p>
      </div>
      <table className="divide-y divide-white">
        <thead>
          <tr>
            {tableHeaders.map((header, idx) => (
              <td
                key={idx}
                scope="col"
                className={`px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider ${idx !== tableHeaders.length - 1 ? "border-r border-white" : ""}`}
              >
                <div className="flex flex-col justify-between h-full">
                  <div>{header.planName}</div>
                  <div>{header.planPrice}</div>
                  <a
                    href={header.planLink}
                    className="inline-block mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-blue-700"
                  >
                    Get Started
                  </a>
                </div>
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {tableBodyData.map((feature, i) => (
            <tr key={i} className="border-b border-white">
              <td className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider border-r border-white">
                {feature.featureCategory}
              </td>
              {(["free", "pro", "godMode", "enterprise"] as PlanType[]).map(
                (planType, idx) => (
                  <td
                    key={planType}
                    className={`px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider ${idx !== tableHeaders.length - 1 ? "border-r border-white" : ""}`}
                  >
                    <ul>
                      {(feature[planType] as string[]).map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckmarkIcon className="w-4 h-4 mr-2 mt-0.5 inline-block" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingSection;
