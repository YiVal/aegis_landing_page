import React from "react";
// Import SVG as React components
import { ReactComponent as IconImage } from "../assets/avatars/aegisLogo.svg";
import { ReactComponent as FooterIcon } from "../assets/Footer.svg";

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="bg-footerblue text-xs text-gray-400 py-4 mx-auto px-36 flex flex-col justify-between items-center"
      style={{ height: '204px' }}
    >
      {/* Top content section */}
      <div className="w-full flex justify-between items-center py-4 mt-3 border-b border-gray-300"> {/* Adjust line position and color */}
        <IconImage style={{ height: '50px' }} />  {/* Use SVG component directly */}
        <FooterIcon style={{ height: '50px', marginLeft: '100px' }} />  {/* Move icon to the right */}
        <div className="text-white">
          Contact us: <a href="mailto:contactus@tryaegis.app" className="hover:text-gray-300">contactus@tryaegis.app</a>
        </div>
      </div>

      {/* Bottom links section */}
      <div className="w-full flex justify-center gap-4 pt-2"> {/* Move line down slightly */}
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





