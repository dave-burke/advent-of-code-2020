const { expect, test } = require('@jest/globals')
const day10 = require('./day10')

test('part1', () => {
  const testInput = [
    'a',
  ]
  expect(day10.part1(testInput)).toBe(testInput)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day10.part2(testInput)).toBe(testInput)
})
