const { expect, test } = require('@jest/globals')
const day14 = require('./day14')

test('part1', () => {
  const testInput = [
    'a',
  ]
  expect(day14.part1(testInput)).toBe(testInput)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day14.part2(testInput)).toBe(testInput)
})
