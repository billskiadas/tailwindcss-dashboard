module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
        pulse: 'pulse 1s ease-in-out',
        shake: 'shake 500ms ease-in-out',
      },
      keyframes: {
        shake: {
          // '0%, 100%': {transform: 'translateX(0)'},
          // '25%': {transform: 'translateX(-5px)'},
          // '80% ': {transform: 'translateX(5px)'}
          '0%': {opacity: '0%'},
          '100% ': {opacity: '100%'}
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
