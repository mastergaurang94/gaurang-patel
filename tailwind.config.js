module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      default: ['Vollkorn', 'serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}