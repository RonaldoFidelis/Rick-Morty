/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'font':'#FFFFFF',
        'button':'#00E572',
        'input':'#403F3F'
      }
    },
  },
  plugins: [],
}
