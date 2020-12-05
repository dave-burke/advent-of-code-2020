const day = 6
const part = 1

const utils = require('./utils')
const solution = require(`./day${6}`)

utils.readInput(`day${day}.txt`).then((input) => solution[`part${part}`](input)).then(result => console.log(`Done: ${result}`))
