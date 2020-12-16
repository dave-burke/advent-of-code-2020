const { expect, test } = require('@jest/globals')
const day16 = require('./day16')

const testInput = `class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50

your ticket:
7,1,14

nearby tickets:
7,3,47
40,4,50
55,2,20
38,6,12`

test('part1', () => {
  expect(day16.part1(testInput)).toBe(71)
})

test('part2', () => {
  expect(day16.part2(testInput)).toBe(1)
})
