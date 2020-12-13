const { expect, test } = require('@jest/globals')
const day13 = require('./day13')

test('part1', () => {
  const testInput = [
    '939',
    '7,13,x,x,59,x,31,19',
  ]
  expect(day13.part1(testInput)).toBe(295)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day13.part2(testInput)).toBe(testInput)
})
