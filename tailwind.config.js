module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ironmanred: '#D71515'
    },
    extend: {
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
