import React from "react";

// Define types for feature and plan
type FeatureType = {
  name: string;
  included?: boolean;
  credits?: string;
};

type PlanType = {
  name: string;
  price: string;
  features: FeatureType[];
  bestChoice?: boolean;
  contactUs?: boolean;
};

// Define the plan data
const plans: PlanType[] = [
  {
    name: "Free",
    price: "$0/mo billed annually",
    features: [
      { name: "250 credits", included: true },
      { name: "Usage of GPT-3.5", included: true },
      { name: "Essay Topic Generation", credits: "20 credits" },
      { name: "Essay Outline Generation", credits: "30 credits" },
      { name: "Essay Writing", credits: "200 credits" },
    ],
  },
  {
    name: "PRO",
    price: "$29.9/mo billed annually",
    features: [
      { name: "1000 credits", included: true },
      { name: "Usage of GPT-4", included: true },
      { name: "Essay Topic Generation", included: true },
      { name: "Essay Outline Generation", included: true },
      { name: "Essay Writing", included: true },
    ],
  },
  {
    name: "GOD mode",
    price: "$49.9/mo billed annually",
    bestChoice: true,
    features: [
      { name: "2000 credits", included: true },
      { name: "24 hour VIP customer support", included: true },
      { name: "Usage of GPT-4", included: true },
      { name: "Essay Topic Generation", included: true },
      { name: "Essay Writing", credits: "Free" },
    ],
  },
  {
    name: "Enterprise",
    price: "contact US",
    features: [
      { name: "Custom credits", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "Priority support", included: true },
      { name: "Custom integration", included: true },
    ],
  },
];

// Feature component
const Feature: React.FC<{ feature: FeatureType }> = ({ feature }) => {
  return (
    <li className="flex justify-between items-center my-2">
      <span
        className={`${feature.included ? "text-green-500" : "text-red-500"}`}
      >
        {feature.included ? "✔" : "✘"}
      </span>
      <span className="text-gray-300">{feature.name}</span>
      <span>{feature.credits}</span>
    </li>
  );
};

// PlanCard component
const PlanCard: React.FC<{ plan: PlanType }> = ({ plan }) => {
  return (
    <div
      className={`p-4 md:p-8 bg-gray-800 rounded-lg shadow-xl text-white ${plan.bestChoice ? "ring-2 ring-yellow-400" : ""}`}
    >
      <h3 className="text-lg md:text-xl font-semibold mb-4">{plan.name}</h3>
      <p className="mb-4">{plan.price}</p>
      {plan.features.map((feature, index) => (
        <Feature key={index} feature={feature} />
      ))}
      <button
        className={`mt-4 py-2 px-6 rounded-lg text-sm md:text-md ${plan.contactUs ? "bg-green-500" : "bg-blue-500"}`}
      >
        {plan.contactUs ? "Talk to sales" : "Get started"}
      </button>
    </div>
  );
};

// PricingSection component
const PricingSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-white mb-8">
          Compare plans
        </h2>
        <div className="flex flex-wrap -mx-4 justify-center">
          {plans.map((plan, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <PlanCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
