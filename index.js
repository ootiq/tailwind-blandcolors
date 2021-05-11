const plugin = require("tailwindcss/plugin")
const colors = require("tailwindcss/colors")

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
            ...colors,
        }        
    }
})