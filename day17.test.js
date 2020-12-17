const { expect, test } = require('@jest/globals')
const day17 = require('./day17')

const testInput = [
  '.#.',
  '..#',
  '###',
]

test('part1', () => {
  expect(day17.part1(testInput)).toBe(112)
})

test('part2', () => {
  expect(day17.part2(testInput)).toBe(848)
})
