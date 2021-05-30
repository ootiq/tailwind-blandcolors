const bland = require('./colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...bland,
      ...defaultTheme.colors
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: []
}
