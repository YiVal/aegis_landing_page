import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300">
            Pricing
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-300">
            Testimonial
          </a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300">
            Terms of Service
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
        </div>
        <div>
          <span>© 2023 STEM Essays</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
