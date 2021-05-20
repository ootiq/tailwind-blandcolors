const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")

let blandColors = generateBlandColors()

function generateBlandColors() {
    let c = {}
    for (let index = 1; index < 10; index++) {
        c[`${index}00`] = `rgba(0, 0, 0, 0.${index})`
    }

    return c
}


module.exports = plugin(function() {}, {
    theme: {
        colors: {
            bland: blandColors,
            ...defaultTheme.colors,
        }        
    }
})