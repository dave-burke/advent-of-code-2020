const { expect, test } = require('@jest/globals')
const day8 = require('./day8')

test('part1', () => {
  const testInput = [
    'a',
  ]
  expect(day8.part1(testInput)).toBe(testInput)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day8.part2(testInput)).toBe(testInput)
})
