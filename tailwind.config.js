/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'form':'#FFFFFF',
        'fontForm':'#202329',
        'font':'#FFFFFF',
        'button':'#00E572',
        'input':'#403F3F'
      }
    },
  },
  plugins: [],
}
