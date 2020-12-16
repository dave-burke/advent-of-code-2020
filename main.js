const day = 16
const part = 1

const utils = require('./utils')
const solution = require(`./day${day}`)

utils.readInputRaw(`day${day}.txt`).then((input) => solution[`part${part}`](input)).then(result => console.log(`Done: ${result}`))
