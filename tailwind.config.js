/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F2FF',
          100: '#81FFFF',
          200: '#75ECFF',
          300: '#6AD6FF',
          400: '#61C3EF',
          500: '#58B1D9',
          600: '#005CBF',
          700: '#004999',
          800: '#003773',
          900: '#002B59'
        },
        secondary: {
          500: '#ACB8DE',
          700: '#021331',
          900: '#010917'
        },
        neutral: {
          50: '#f4f4f4',
          100: '#eeeeeF',
          200: '#dcdcde',
          300: '#8e8e93',
          400: '#808084',
          500: '#727276',
          600: '#6b6b6e',
          700: '#555558',
          800: '#404042',
          900: '#323233'
        },
        yellow : {
          300 : "#F2BF33"
        },
        blue : {
          300 : "#5EBDFF"
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif']
      }
    }
  },
  plugins: []
}
