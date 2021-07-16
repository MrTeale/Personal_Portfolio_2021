module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ironmanred: '#D71515',
        customwhite: '#F3EEE8'
      },
      margin: {
        '100': '28rem',
        '120': '48rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
