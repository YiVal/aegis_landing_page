/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // Adjust this glob pattern to match your project file structure
    // "./path/to/other/directories/if/any/**/*.html", // Include any other directories where you use Tailwind classes
  ],
  theme: {
    extend: {
      minWidth: {
        1024: "1024px",
      },
      keyframes: {
        "slide-in-out": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-in-out": "slide-in-out 30s linear infinite",
      },
    },
  },
  plugins: [],
};
