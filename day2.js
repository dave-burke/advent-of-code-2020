const { readFile } = require('fs')
const utils = require('./utils')

async function part1 () {
  const data = await utils.readInput('day2.txt')
  console.log(data)
}

part1()
