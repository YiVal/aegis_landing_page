import React from "react";

import { ReactComponent as IconImage } from "../assets/avatars/aegisLogo.svg";

const TopBar: React.FC = () => {
  return (
    <nav
      id="topbar"
      className="px-36 h-20 bg-bgblue flex items-center justify-between text-sm"
    >
      <div className="flex items-center w-1/2">
        <a href="#topbar" className="flex items-center">
          <IconImage className="ml-2 w-15 h-8" title="Logo" />
        </a>
        <a href="#stats" className="text-white hover:text-white ml-12">
          Compliances
        </a>
        <a href="#callTo" className="text-white hover:text-white ml-12">
          Contact Us
        </a>
      </div>
      <div className="flex items-center w-1/2 justify-end">
        <div className="flex justify-between items-center h-10">
          <a href="/login" className="text-white hover:text-gray-900 px-4">
            Log In
          </a>
          <a
            href="https://airtable.com/appfrX6dbb3c6baEz/shrpgOcRXrn86NMPn"
            className="bg-white text-bgblue hover:bg-blue-700 hover:text-white rounded-md h-full px-4 flex items-center"
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
