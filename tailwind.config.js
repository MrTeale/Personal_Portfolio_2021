module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '677px',
      // => @media (min-width: 640px) { ... }

      'md': '802px',
      // => @media (min-width: 768px) { ... }

      'lg': '1104px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1326px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1624px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        ironmanred: '#D71515',
        customwhite: '#F3EEE8',
        customgray: '#b4b4b4'
      },
      margin: {
        '70': '17.5rem',
        '100': '28rem',
        '120': '48rem',
      },
      fontSize: {
        '20xl': ['25rem', {
          letterSpacing: '-0.01em',
        }],
        '25xl': ['30rem', {
          letterSpacing: '-0.01em',
        }],
        '12xl': ['10rem', {
          letterSpacing: '-0.01em',
        }],
      },
      zIndex: {
        '1': 1,
        '2': 2
      },
      height: {
        '112': '28rem',
        '120': '30rem'
      }
    }
  },
  variants: {
    fill: ['hover', 'focus'],
    extend: {},
  },
  plugins: [],
}
