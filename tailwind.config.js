/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:"'Inter', sans-serif",
        lora:"'Lora', serif",
        rale:"'Raleway', sans-serif",
      }
    },
  },
  plugins: [require('daisyui'),],
}

