const utils = require('./utils')

function parseLine (line) {
  const groups = line.match(/(\d+)-(\d+) (\w): (.*)/)
  return {
    min: Number(groups[1]),
    max: Number(groups[2]),
    char: groups[3],
    pwd: groups[4],
  }
}

function countChars (pwd, char) {
  let n = 0
  for (const c of pwd) {
    if (c === char) {
      n = n + 1
    }
  }
  return n
}

function part1 (input) {
  console.log('start')
  return input.map(line => {
    const { min, max, char, pwd } = this.parseLine(line)
    const nChars = this.countChars(pwd, char)
    return nChars >= min && nChars <= max
  }).reduce((result, nextBool) => result + Number(nextBool), 0)
}

module.exports = { parseLine, countChars, part1 }
