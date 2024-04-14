import React from "react";
import { ReactComponent as Step1SVG } from "../assets/1point.svg";
import { ReactComponent as Step2SVG } from "../assets/2point.svg";
import { ReactComponent as Step3SVG } from "../assets/3point.svg";
import { ReactComponent as Step4SVG } from "../assets/4point.svg";

interface NumberedSquareProps {
  number: number;
  className?: string;
}

const NumberedSquare: React.FC<NumberedSquareProps> = ({ number, className }) => (
  <div className={`flex justify-center items-center bg-deepblue text-white w-7 h-7 mb-6 last:mb-0 ${className}`}>
    {number}
  </div>
);

const SecurityUseSection: React.FC = () => {
  const steps = [
    {
      img: Step1SVG,
      subtitle: "Data Loss Protection (DLP) Compliance",
      description:
        "DLP policies ensure real-time redaction or omission of sensitive user or company information in outputs, aligning with data privacy laws. Administrators set sensitivity levels to meet specific organizational standards.",
    },
    {
      img: Step2SVG,
      subtitle: "Data Never Leaves Your Company",
      description:
        "All measures are taken to ensure that sensitive information, whether it be personal data, financial records, intellectual property, or other forms of confidential information, is stored, processed, and managed within the secure confines of the company's IT environment.",
    },
    {
      img: Step3SVG,
      subtitle: "Configurable Remediation Actions",
      description:
        "Customers have the flexibility to customize their AI websites with various modes such as Warning, Restrict, and Redact to manage sensitive data. These remediation options allow them to make informed decisions for their employees' benefit, ensuring that ChatGPT is used securely and effectively.",
    },
    {
      img: Step4SVG,
      subtitle: "Logging and Reporting",
      description:
        "Comprehensive logging of all requests and responses provides a detailed audit trail for compliance and monitoring. This is managed by an automated pipeline to make it lightweight for your security champion.",
    },
  ];

  return (
    <div id="securityUse" className="relative px-36 mt-40 flex flex-col items-center">
      <div className="text-center w-full">
        <h2 className="font-semibold text-4xl my-4 text-gray-900">
          Securely Use ChatGPT: Privacy, Compliance, and Control
        </h2>
        <p className="max-w-2xl text-lg text-gray-600 mx-auto">
          Aegis enables secure use of ChatGPT, ensuring privacy, compliance, and control over your data. We offer:
        </p>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-deepblue" style={{ height: 'calc(100% - 32rem)', marginTop: '20rem' }}>
        {/* Vertical line element */}
      </div>
      <div className="absolute flex flex-col justify-between left-1/2 transform -translate-x-1/2" style={{ height: 'calc(100% - 12rem)' }}>
        {steps.map((_, index) => (
          <NumberedSquare
            key={index}
            number={index + 1}
            className={index === 0 ? 'mt-80' : ''}
          />
        ))}
      </div>
      {steps.map((step, index) => (
        <div key={index} className={`flex items-center my-6 w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className="w-1/2 flex justify-center items-center">
            <step.img className="max-w-lg" />
          </div>
          <div className="w-1/2 pl-16 pr-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {step.subtitle}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SecurityUseSection;





