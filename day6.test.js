const { expect, test } = require('@jest/globals')
const day6 = require('./day6')

const testInput = `abc

a
b
c

ab
ac

a
a
a
a

b`

test('part1', () => {
  expect(day6.part1(testInput)).toBe(11)
})

test('part2', () => {
  expect(day6.part2(testInput)).toBe(6)
})
