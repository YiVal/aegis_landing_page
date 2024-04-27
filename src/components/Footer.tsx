import React from "react";

// Import SVG as React components
import { ReactComponent as IconImage } from "../assets/avatars/aegisLogo.svg";
import { ReactComponent as LinkedinIcon } from "../assets/LinkedIn 1.svg";
import { ReactComponent as XIcon } from "../assets/x.svg";

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="bg-footerblue text-xs text-gray-400 py-4 mx-auto px-36 flex flex-col justify-between items-center"
      style={{ height: "204px" }}
    >
      {/* Top content section */}
      <div
        className="w-full flex justify-between items-center py-4 mt-3 border-b border-gray-300"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        {" "}
        {/* Removing default padding */}
        <div className="flex">
          {" "}
          {/* New flex container for icons */}
          <IconImage style={{ height: "50px" }} />
          <a
            href="https://twitter.com/aegis8544"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {/* Link for XIcon */}
            <XIcon
              style={{
                height: "50px",
                marginRight: "12px",
                marginLeft: "500px",
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/101981488"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {/* Link for LinkedinIcon */}
            <LinkedinIcon style={{ height: "50px" }} />
          </a>
        </div>
        <div className="text-white">
          Contact us:{" "}
          <a
            href="mailto:contactus@tryaegis.app"
            className="hover:text-gray-300"
          >
            contactus@tryaegis.co
          </a>
        </div>
      </div>

      {/* Bottom links section */}
      <div className="w-full flex justify-center gap-4 pt-2">
        <a href="/term" className="hover:text-gray-300">
          Aegis.com © 2024
        </a>
        <span>|</span>
        <a href="/policy" className="hover:text-gray-300">
          Privacy Policy
        </a>
        <span>|</span>
        <a href="/policy" className="hover:text-gray-300">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
