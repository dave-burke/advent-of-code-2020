const { expect, test } = require('@jest/globals')
const day6 = require('./day6')

test('part1', () => {
  const testInput = [
    'a',
  ]
  expect(day6.part1(testInput)).toBe(testInput)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day6.part2(testInput)).toBe(testInput)
})
