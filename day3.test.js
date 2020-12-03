const { expect, test } = require('@jest/globals')
const day3 = require('./day3')

describe('day 3', () => {
  const testInput = [
    '..##.......',
    '#...#...#..',
    '.#....#..#.',
    '..#.#...#.#',
    '.#...##..#.',
    '..#.##.....',
    '.#.#.#....#',
    '.#........#',
    '#.##...#...',
    '#...##....#',
    '.#..#...#.#',
  ]

  test('part1', () => {
    expect(day3.part1(testInput)).toBe(7)
  })

  test.each`
    right | down | expected
    ${1}  | ${1} | ${2}
    ${5}  | ${1} | ${3}
    ${7}  | ${1} | ${4}
    ${1}  | ${2} | ${2}
  `('checkSlope for $right, $down should find $expected', ({ right, down, expected }) => {
    expect(day3.checkSlope(testInput, right, down)).toBe(expected)
  })

  test('part2', () => {
    expect(day3.part2(testInput)).toBe(336)
  })
})
