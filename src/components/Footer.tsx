import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="bg-gray-900 text-xs text-gray-400 py-4 mx-auto px-36 flex justify-between"
    >
      <div className="flex gap-4">
        <a href="#pricing" className="hover:text-gray-300">
          Pricing
        </a>
        |
        <a href="#testimonial" className="hover:text-gray-300">
          Testimonial
        </a>
      </div>
      <div className="flex gap-4">
        <a href="/term" className="hover:text-gray-300">
          Terms of Service
        </a>
        |
        <a href="/policy" className="hover:text-gray-300">
          Privacy Policy
        </a>
        <span>© 2023 STEM Essays</span>
      </div>
    </footer>
  );
};

export default Footer;
