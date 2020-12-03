const { expect, test } = require('@jest/globals')
const day4 = require('./day4')

test('part1', () => {
  const testInput = [
    'a',
  ]
  expect(day4.part1(testInput)).toBe(testInput)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day4.part2(testInput)).toBe(testInput)
})
