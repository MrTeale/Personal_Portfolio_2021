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
        customwhite: '#F3EEE8',
        customgray: '#b4b4b4'
      },
      margin: {
        '100': '28rem',
        '120': '48rem',
      },
      fontSize: {
        '20xl': ['25rem', {
          letterSpacing: '-0.01em',
        }],
      },
      zIndex: {
        '1': 1,
        '2': 2
       }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
