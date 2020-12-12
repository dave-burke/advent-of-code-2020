const { expect, test } = require('@jest/globals')
const day13 = require('./day13')

test('part1', () => {
  const testInput = [
    'a',
  ]
  expect(day13.part1(testInput)).toBe(testInput)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day13.part2(testInput)).toBe(testInput)
})
