const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        sans: ["Montserrat", 'Yatra One' ],
        serif : ['Montserrat']
      },
      blur: {
        xs: '4px',
      },
    },
    
  },
  darkMode: "class",
  plugins: [nextui()]
}

