/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sofia-sans': ['Sofia Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
