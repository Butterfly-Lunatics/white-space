module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        banner: '7.48 / 1',
      },
      fontFamily: {
        din: ['din', 'sans-serif'],
        pop: ['Poppins', 'sans-serif'],
        indie: ['Indie Flower', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
