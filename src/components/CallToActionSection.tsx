import React from "react";

import { ReactComponent as BackgroundImage } from "../assets/3D Morph Lines 9.svg";
import emailIcon from "../assets/Letter.png";
const CallToActionSection: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Subscribed successfully!");
  };

  return (
    <div
      id="callTo"
      className="bg-footerblue px-4 sm:px-8 md:px-12 lg:px-36 py-14 sm:py-20 md:py-24 lg:py-28 mt-8 sm:mt-16 md:mt-24 lg:mt-36 flex items-center justify-center flex-col gap-8 relative text-center"
      style={{ minHeight: '530px' }}
    >
      <div className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-12">
        Subscribe to Our Newsletter.
      </div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 z-10">
        <div className="relative w-full sm:max-w-md flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="pl-12 pr-4 py-2 rounded-l bg-white focus:outline-none focus:border focus:border-blue-500 w-full"
            style={{ paddingLeft: '3rem' }}
          />
          <img
            src={emailIcon}
            alt="Email Icon"
            className="absolute left-4 bottom-3 h-6 w-6"
            style={{ pointerEvents: 'none' }}
          />
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          >
            Subscribe
          </button>
        </div>
      </form>
      <p className="text-white text-xs sm:text-sm w-full">
        Learn more about Security, Privacy & Compliance
      </p>
      <BackgroundImage className="absolute bottom-0 left-0 w-full h-auto z-0" />
    </div>
  );
};

export default CallToActionSection;




