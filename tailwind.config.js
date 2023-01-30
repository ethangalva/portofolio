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
            customYellow: '#F2982E',
            customOrange: '#be5a38',
            customPurple: '#527E7B',
            customRed: '#A25B5B',
            customGray: '#DCD7C9',
        },
        fontFamily: {
            handWritten: ['Just Another Hand', 'cursive']
        },
        
    },
    },
    plugins: [],
}
