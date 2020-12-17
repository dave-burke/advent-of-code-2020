const { expect, test } = require('@jest/globals')
const day17 = require('./day17')

test('part1', () => {
  const testInput = [
    '.#.',
    '..#',
    '###',
  ]
  expect(day17.part1(testInput)).toBe(112)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day17.part2(testInput)).toBe(testInput)
})
