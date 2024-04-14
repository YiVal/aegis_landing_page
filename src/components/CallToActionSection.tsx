import React from "react";
import emailIcon from "../assets/Letter.png";
import { ReactComponent as BackgroundImage } from "../assets/3D Morph Lines 9.svg";

const CallToActionSection: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    alert('Subscribed successfully!'); // Placeholder functionality
  };

  return (
    <div id="callTo" className="bg-footerblue px-36 py-28 mt-36 flex items-center flex-col gap-8 relative" style={{ minHeight: '530px', position: 'relative' }}>
      <div className="text-4xl mt-16 text-white font-bold text-center mb-12">
        Subscribe to Our Newsletter.
      </div>
      <form onSubmit={handleSubmit} className="flex items-center" style={{ position: 'relative', zIndex: 2 }}>
        {/* Email input field with icon */}
        <div className="relative flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="text-gray-500 pl-12 pr-4 py-2 rounded-l bg-white focus:outline-none focus:border-blue-500"
            style={{ paddingLeft: '44px' }} // Proper padding to accommodate icon
          />
          <img
            src={emailIcon}
            alt="Email Icon"
            className="absolute left-3 bottom-2 h-5 w-5" // Correct positioning of the icon
            style={{ pointerEvents: 'none' }}  // Disable interaction with the icon
          />
          {/* Subscription button */}
          <button
            type="submit"
            className="bg-blue-400 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-r flex items-center"
          >
            <span>Subscribe</span>
          </button>
        </div>
      </form>
      {/* Additional descriptive text */}
      <p className="text-white text-sm mt-0" style={{ alignSelf: 'flex-start', width: '100%', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        Learn more about Security, Privacy & Compliance
      </p>

      {/* Use SVG as a React component directly */}
      <BackgroundImage
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 'auto',
          zIndex: 1 // Ensure this is below interactive elements
        }}
      />
    </div>
  );
};

export default CallToActionSection;







