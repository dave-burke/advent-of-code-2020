const { expect, test } = require('@jest/globals')
const day12 = require('./day12')

test('part1', () => {
  const testInput = [
    'F10',
    'N3',
    'F7',
    'R90',
    'F11',
  ]
  expect(day12.part1(testInput)).toBe(25)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day12.part2(testInput)).toBe(testInput)
})
