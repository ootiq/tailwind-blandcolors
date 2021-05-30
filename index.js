const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require('./colors.js')

module.exports = plugin(function() {}, {
    theme: {
        colors: {
            ...colors,
            ...defaultTheme.colors,
        }        
    }
})