import React from "react";

const TopBar: React.FC = () => {
  return (
    <nav
      id="topbar"
      className="px-36 h-20 flex items-center justify-between text-sm"
    >
      <div className="flex justify-between items-center w-1/2">
        <a href="#topbar" className="flex items-center">
          <img className="w-8 h-8" src="/favicon.ico" alt="Logo" />
          <div className="text-xl ml-1 font-extrabold">STEM Essay!</div>
        </a>
        <a href="#pricing" className=" hover:text-gray-900 mx-5">
          Pricing
        </a>
      </div>
      <div className="flex justify-between items-center w-1/2">
        <a href="#testimonial" className=" hover:text-gray-900 mx-5">
          Testimonial
        </a>
        <div className="flex justify-between items-center h-10">
          <a href="/login" className=" text-gray-500 hover:text-gray-900 px-4">
            Log In
          </a>
          <a
            href="https://airtable.com/appfrX6dbb3c6baEz/shrIGfNTAY2PRcEFv"
            className="bg-blue-500 h-full px-4 hover:bg-blue-700 text-white rounded-md flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start for Free
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
