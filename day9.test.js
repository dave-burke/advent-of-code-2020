const { expect, test } = require('@jest/globals')
const day9 = require('./day9')

test('computeRecentSums', () => {
  const testInput = [
    '1',
    '2',
    '3',
  ]
  const result = day9.computeSums(testInput)
  expect(result).toHaveLength(3)
  expect(result).toContain(3)
  expect(result).toContain(4)
  expect(result).toContain(5)
})
const testInput = [
  '35',
  '20',
  '15',
  '25',
  '47',
  '40',
  '62',
  '55',
  '65',
  '95',
  '102',
  '117',
  '150',
  '182',
  '127',
  '219',
  '299',
  '277',
  '309',
  '576',
]
test('part1', () => {
  expect(day9.checkInputPart1(testInput, 5)).toBe(127)
})

test('part2', () => {
  expect(day9.part2(testInput)).toBe(62)
})
