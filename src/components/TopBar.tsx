import React from "react";

const TopBar: React.FC = () => {
  return (
    <nav
      id="topbar"
      className="px-36 h-20 flex items-center justify-between text-sm"
    >
      <a href="#topbar" className="flex items-center">
        <img className="w-8 h-8" src="/favicon.ico" alt="Logo" />
        <div className="text-xl ml-1 font-extrabold">STEM Essay!</div>
      </a>
      <div className="flex items-center">
        <a href="#pricing" className=" hover:text-gray-900 mx-5">
          Pricing
        </a>
        <a href="#testimonial" className=" hover:text-gray-900 mx-5">
          Testimonial
        </a>
      </div>
      <div className="flex items-center h-10">
        <a href="/login" className=" text-gray-500 hover:text-gray-900 px-4">
          Log In
        </a>
        <a
          href="/start"
          className="bg-blue-500 h-full px-4 hover:bg-blue-700 text-white rounded-md flex items-center"
        >
          Start for Free
        </a>
      </div>
    </nav>
  );
};

export default TopBar;
