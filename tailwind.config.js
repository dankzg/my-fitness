const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['layouts/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screen:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      black: colors.black,
      white: colors.white,
      main: '#17191B',
      green: colors.green,
      yellow: colors.amber,
      indigo: colors.indigo,
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'main': '#17191B',
      'card': '#444950',
    }),
    extend: {
      spaceing:{
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius:{
        '4xl': '2rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
