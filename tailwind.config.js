/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        primary: 'blue',
        secondary: {
          100: '#E2E205',
          200: '#888883'
        }
      }
    },
  },
  plugins: [],
}

