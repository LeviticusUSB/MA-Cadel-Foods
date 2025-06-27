/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffdf7',
          100: '#fffaeb',
          200: '#fff2c7',
          300: '#ffe89f',
          400: '#ffd966',
          500: '#ffc107',
          600: '#d4a017',
          700: '#b8860b',
          800: '#996f0a',
          900: '#7a5608',
        }
      }
    },
  },
  plugins: [],
};