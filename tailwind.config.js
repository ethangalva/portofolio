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
        customOrange: '#be5a38',
        customPastelYellow: '#FFE15D',
        customPastelGreen: '#557153',
        customPastelOrange: '#FF884B',
      },
      fontFamily: {
        handWritten: ['Just Another Hand', 'cursive']
      }
    },
  },
  plugins: [],
}
