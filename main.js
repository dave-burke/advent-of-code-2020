const day = 14
const part = 2

const utils = require('./utils')
const solution = require(`./day${day}`)

utils.readInput(`day${day}.txt`).then((input) => solution[`part${part}`](input)).then(result => console.log(`Done: ${result}`))
