const { expect, test } = require('@jest/globals')
const day11 = require('./day11')

test('part1', () => {
  const testInput = [
    'a',
  ]
  expect(day11.part1(testInput)).toBe(testInput)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day11.part2(testInput)).toBe(testInput)
})
