const utils = require('./utils')
const day2 = require('./day2')

// utils.readInput('day2.txt').then((input) => day2.part1(input)).then(result => console.log(`Done: ${result}`))
utils.readInput('day2.txt').then((input) => day2.part2(input)).then(result => console.log(`Done: ${result}`))
