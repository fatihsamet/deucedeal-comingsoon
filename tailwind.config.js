module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'court-green': '#1e4d2b',
        'line-gray': '#dddddd'
      },
      backgroundImage: {
        'tennis-court': "url('/court-bg.png')"
      }
    },
  },
  plugins: [],
}
