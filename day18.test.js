const { expect, test } = require('@jest/globals')
const day18 = require('./day18')

test('part1', () => {
  const testInput = [
    'a',
  ]
  expect(day18.part1(testInput)).toBe(testInput)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day18.part2(testInput)).toBe(testInput)
})
