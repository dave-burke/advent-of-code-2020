const { expect, test } = require('@jest/globals')
const day9 = require('./day9')

test('part1', () => {
  const testInput = [
    'a',
  ]
  expect(day9.part1(testInput)).toBe(testInput)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day9.part2(testInput)).toBe(testInput)
})
