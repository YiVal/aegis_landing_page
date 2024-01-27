import React from "react";

import { ReactComponent as CheckmarkIcon } from "../assets/mark_s.svg";
import stemIcon from "../assets/stem.svg";

type PlanHeader = {
  planName?: string;
  planPrice?: string;
  planLink?: string; // Assuming this is a link to the plan details or sign-up
  recommended?: boolean;
  planText: string;
};

type PlanType = "free" | "pro" | "godMode" | "enterprise";

const tableHeaders: PlanHeader[] = [
  {
    planName: "Free",
    planPrice: "$0/mo billed annually",
    planLink: "/free-plan",
    recommended: false,
    planText: "Get Started",
  },
  {
    planName: "PRO",
    planPrice: "$29.9/mo billed annually",
    planLink: "/pro-plan",
    recommended: false,
    planText: "Get Started",
  },
  {
    planName: "GOD mode",
    planPrice: "$49.9/mo billed annually",
    planLink: "/god-plan",
    recommended: true,
    planText: "Get Started",
  },
  {
    planName: "Enterprise",
    planPrice: "We will give you a quote",
    planLink: "/contact-us",
    recommended: false,
    planText: "Talk to sales",
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
    godMode: ["2000 credits", "Usage of GPT-4", "24 hour VIP customer support"],
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
    <div
      id="pricing"
      className="flex flex-col items-center text-sm justify-center bg-brown text-white px-36 py-24 gap-12"
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl font-semibold text-white">Compare plans</h2>
        <p className="text-gray-400">
          We recommend building a plan that works best for you.
        </p>
      </div>
      <table className="divide-y divide-white">
        <thead className="h-40">
          <tr>
            <td key="icon" className="border-r border-white">
              <div className="flex items-center justify-center px-6 py-3">
                <img src={stemIcon} alt="Icon" />
              </div>
            </td>
            {tableHeaders.map((header, idx) => (
              <td
                key={idx}
                className={`px-6 pt-4 align-top ${idx !== tableHeaders.length - 1 ? "border-r border-white" : ""}`}
              >
                <div className="text-lg ">{header.planName}</div>
                <div className="text-xs text-gray-500 whitespace-nowrap">
                  {header.planPrice}
                </div>
                {header.recommended !== undefined && (
                  <div
                    className={`mt-8 max-w-32 py-2 px-4 text-center rounded border ${
                      header.recommended
                        ? "bg-blue-500 hover:bg-blue-700 border-blue-700" // If recommended and true
                        : "text-gray-400 border-gray-400" // If recommended but false
                    }`}
                  >
                    <a href={header.planLink}>{header.planText}</a>
                  </div>
                )}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBodyData.map((feature) => (
            <tr key={feature.featureCategory}>
              <td className="text-xs whitespace-nowrap align-top border-t border-r min-h-12 px-6 py-4">
                {feature.featureCategory}
              </td>
              {(["free", "pro", "godMode", "enterprise"] as PlanType[]).map(
                (planType, i) => (
                  <td
                    key={planType}
                    className={`px-6 py-4 align-top ${i !== 3 ? "border-t border-r border-white" : ""}`}
                  >
                    <ul>
                      {(feature[planType] as string[]).map((item, idx) => (
                        <li key={item} className="flex">
                          <CheckmarkIcon className="w-3 mr-1" />
                          <div className="w-28 text-xs">{item}</div>
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
