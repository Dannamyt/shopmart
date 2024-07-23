/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        pri:'#0a0300'
      },
      fontFamily:{
        nunito:"Libre Caslon Text",
        ibm: "IBM Plex Mono"
      },
      backgroundImage:{
        pri:'./images/promoad.jpg'
      }
    },
  },
  plugins: [],
}

