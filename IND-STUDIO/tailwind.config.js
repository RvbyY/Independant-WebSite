/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/index.jsx", "./components/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
