/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#4C604C',
        customBlack: '#28282B',
        customYellow: '#ffc830',
        customGreenLight: '#576a57',
      }
    },
  },
  plugins: [],
}
