const utils = require('./utils')
// const day2 = require('./day2')
const day3 = require('./day3')

// Day 2
// utils.readInput('day2.txt').then((input) => day2.part2(input)).then(result => console.log(`Done: ${result}`))
// utils.readInput('day2.txt').then((input) => day2.part1(input)).then(result => console.log(`Done: ${result}`))

// Day 3
utils.readInput('day3.txt').then((input) => day3.part1(input)).then(result => console.log(`Done: ${result}`))
