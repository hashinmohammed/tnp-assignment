/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tesla: {
          dark: "#171a20",
          light: "#f4f4f4",
          red: "#cc0000",
          gray: "rgba(23, 26, 32, 0.8)",
        },
      },
      fontFamily: {
        sans: ['"Eudoxus Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
