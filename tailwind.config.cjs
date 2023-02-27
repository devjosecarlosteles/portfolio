/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins1: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        code: "url('/banner.png')",
      },
      colors: {
        "dark": "#101010",
      },
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}