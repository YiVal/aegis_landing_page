/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // Adjust this glob pattern to match your project file structure
    // "./path/to/other/directories/if/any/**/*.html", // Include any other directories where you use Tailwind classes
  ],
  theme: {
    extend: {
      scrollBehavior: ["smooth"],
      colors: {
        brown: "#1E3A2B",
      },
      minWidth: {
        1024: "1024px",
      },
      animation: {
        "scroll-left": "scroll-left 60s linear infinite",
        "scroll-right": "scroll-right 60s linear infinite",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(30%)" },
          "100%": { transform: "translateX(-30%)" },
        },
        "scroll-right": {
          "0%": { transform: "translateX(-30%)" },
          "100%": { transform: "translateX(30%)" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
