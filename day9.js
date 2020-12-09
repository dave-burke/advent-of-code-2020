const { forEachPair } = require('./utils')

function computeSums (input) {
  const result = []
  const numbers = input.map(Number)
  forEachPair(numbers, (a, b) => result.push(a + b))
  return result
}
function computeRecentSums (input, start, end) {
  const preamble = input.slice(start, end)
  return computeSums(preamble)
}
function validate (input, start, end, check) {
  const sums = computeRecentSums(input, start, end)
  if (sums.includes(check)) {
    return true
  }
  return false
}

function checkInputPart1 (input, preambleLength) {
  for (let i = preambleLength; i <= input.length; i++) {
    const end = i
    const start = i - preambleLength
    const check = Number(input[i])
    console.log(`calcSums ${start} to ${end} looking for ${check}`)
    if (!validate(input, start, end, check)) {
      return check
    }
  }
  return null
}
function part1 (input) {
  return checkInputPart1(input, 25)
}

function checkSum (range, expected) {
  const sum = range.reduce((a, b) => a + b, 0)
  return sum === expected
}

function findInvalidRange (input, invalidNumber) {
  const numbers = input.map(Number)
  let result = null
  forEachPair(numbers, (a, b, i, j) => {
    const range = numbers.slice(i, j + 1)
    if (checkSum(range, invalidNumber)) {
      result = range
      return false
    }
  })
  return result
}

function checkInputPart2 (input, preambleLength) {
  const invalidNumber = checkInputPart1(input, preambleLength)
  const invalidRange = findInvalidRange(input, invalidNumber)
  const smallest = invalidRange.reduce((a, b) => Math.min(a, b), Infinity)
  const biggest = invalidRange.reduce((a, b) => Math.max(a, b), -Infinity)
  return smallest + biggest
}
function part2 (input) {
  return checkInputPart2(input, 25)
}

module.exports = { part1, part2, computeSums, computeRecentSums, checkInputPart1, checkSum, findInvalidRange, checkInputPart2 }
