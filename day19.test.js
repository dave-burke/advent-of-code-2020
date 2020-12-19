const { expect, test } = require('@jest/globals')
const day19 = require('./day19')

test('part1', () => {
  const testInput = [
    'a',
  ]
  expect(day19.part1(testInput)).toBe(testInput)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day19.part2(testInput)).toBe(testInput)
})
