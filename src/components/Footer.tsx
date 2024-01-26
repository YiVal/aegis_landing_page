import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-xs text-gray-400 py-4 mx-auto px-36 flex justify-between items-center">
      <div className="flex gap-4">
        <a href="#pricing" className="hover:text-gray-300">
          Pricing
        </a>
        <span>|</span>
        <a href="#testimonial" className="hover:text-gray-300">
          Testimonial
        </a>
      </div>
      <div>
        <div className="flex gap-4">
          <a href="/term" className="hover:text-gray-300">
            Terms of Service
          </a>
          <span>|</span>
          <a href="/policy" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <span>© 2023 STEM Essays</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
