/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        turqoise: "#3af8dc",
        dimgray: "#191919",
        lightgray: "#333333",
        darkgray: "#101010",
        silver: "#bababa",
        light: "#f0f0f0",
      },
    },
  },
  plugins: [],
};
