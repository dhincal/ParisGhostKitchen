/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kitchen: {
          green: '#056839',
          orange: '#F7941D',
          gray: '#F7F7F7',
          dark: '#424242'
        }
      }
    },
  },
  plugins: [],
}
