/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        snpro: ['"SN Pro"', "sans-serif"],
      },
      colors: {
        "brand-purple": "var(--purple)",
        "brand-purple-light": "var(--purple-light)",
        "brand-purple-dark": "var(--purple-dark)",
        "brand-black": "var(--black)",
        "brand-gray": "var(--gray)",
        "brand-white": "var(--white)",
      },
    },
  },
  plugins: [],
};
