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
        mentor: {
          DEFAULT: '#779C19',
          shadow: '#779C1966',
        },
        mentee: {
          DEFAULT: '#EB7D07',
          shadow: '#EB7D0766',
        },
        hackathon: {
          DEFAULT: '#41ACBA',
          shadow: '#41ACBA66',
        },
        connection: {
          DEFAULT: '#D49F0F',
          shadow: '#DDB23F66',
        },
      },
    },
  },
  plugins: [],
};
