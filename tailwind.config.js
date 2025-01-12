/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat-Bold"],
        body: ["Montserrat-Regular"],
      },
    },
  },
  plugins: [],
}
