const { expect, test } = require('@jest/globals')
const day7 = require('./day7')

test('part1', () => {
  const testInput = [
    'a',
  ]
  expect(day7.part1(testInput)).toBe(testInput)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day7.part2(testInput)).toBe(testInput)
})
