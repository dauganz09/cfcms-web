module.exports = {
  mode : 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode : false,
  theme: {
    extend: {
      fontFamily : {
        'montserrat' : ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
