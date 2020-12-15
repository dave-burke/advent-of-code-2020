const { expect, test } = require('@jest/globals')
const day15 = require('./day15')

test('part1', () => {
  const testInput = [
    'a',
  ]
  expect(day15.part1(testInput)).toBe(testInput)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day15.part2(testInput)).toBe(testInput)
})
