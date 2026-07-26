/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // brand colors here 
        primary: "#1a365d",    // Dark blue
        secondary: "#2b6cb0",  // Medium blue
        accent: "#ed8936",     // Orange
        light: "#f7fafc",      // Off-white
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], //  font
      },
    },
  },
  plugins: [],
};