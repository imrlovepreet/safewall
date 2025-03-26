/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1A1F36',
          blue: '#007BFF',
          green: '#00FF99',
          grey: '#F5F5F5'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
};