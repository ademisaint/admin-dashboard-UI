const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    flowbite.content(),
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [
    flowbite.plugin(),
  ],
}

