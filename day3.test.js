const { expect, test } = require('@jest/globals')
const day3 = require('./day3')

test('part1', () => {
  const testInput = [
    'a',
  ]
  expect(day3.part1(testInput)).toBe(testInput)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day3.part2(testInput)).toBe(testInput)
})
