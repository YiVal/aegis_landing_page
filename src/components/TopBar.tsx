import React from "react";

const TopBar: React.FC = () => {
  return (
    <nav
      id="topbar"
      className="bg-white shadow-md mx-0 md:px-24 px-36 h-20 flex items-center justify-between  text-sm"
    >
      <a href="#topbar" className="flex flex-row justify-start h-8 w-auto">
        <img src="/favicon.ico" alt="Logo" />
        <span className="text-xl font-semibold">STEM Essay!</span>
      </a>
      <div className="flex items-center justify-center">
        <a
          href="#pricing"
          className="whitespace-nowrap text-gray-500 hover:text-gray-900 mx-5"
        >
          Pricing
        </a>
        <a
          href="#testimonial"
          className="whitespace-nowrap text-gray-500 hover:text-gray-900 mx-5"
        >
          Testimonial
        </a>
      </div>
      <div className="flex items-center justify-end">
        <a
          href="/login"
          className="whitespace-nowrap inline-flex items-center justify-center text-gray-500 hover:text-gray-900 px-4 py-2"
        >
          Log In
        </a>
        <a
          href="/portal"
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-1 rounded-md"
        >
          Start for Free
        </a>
      </div>
    </nav>
  );
};

export default TopBar;
