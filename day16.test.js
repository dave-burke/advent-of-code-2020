const { expect, test } = require('@jest/globals')
const day16 = require('./day16')

test('part1', () => {
  const testInput = [
    'a',
  ]
  expect(day16.part1(testInput)).toBe(testInput)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day16.part2(testInput)).toBe(testInput)
})
