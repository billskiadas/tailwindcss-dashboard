module.exports = {
  purge: {
    mode: 'all',
    content: ['./src/**/*.{js,jsx,ts,tsx}',
      './public/index.html'],
    preserveHtmlElements: false,
    options: {
      keyframes: true
    },

  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
        pulse: 'pulse 1s ease-in-out',
        shake: 'shake 500ms ease-in-out',
        poof: 'poof 500ms ease-in-out',
        fastpoof: 'poof 200ms ease-in-out'
      },
      keyframes: {
        poof: {
          '0%': {opacity: '0%'},
          '100% ': {opacity: '100%'}
        },
        shake: {
          '0%, 100%': {transform: 'translateX(0)'},
          '25%': {transform: 'translateX(-5px)'},
          '80% ': {transform: 'translateX(5px)'}
        }
      },
      translate: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
