/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat-Bold'],
        body: ['Montserrat-Regular'],
      },
      colors: {
        primary: {
          one: '#1A6D66',
          two: '#54B5B5',
        },
        secondary: {
          one: '#779C19',
          two: '#EB7D07',
        },
      },
    },
  },
  plugins: [],
};
