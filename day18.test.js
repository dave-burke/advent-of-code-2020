const { expect, test } = require('@jest/globals')
const day18 = require('./day18')

describe('part1', () => {
  test('1 + 2 * 3 + 4 * 5 + 6', () => {
    expect(day18.part1('1 + 2 * 3 + 4 * 5 + 6')).toBe(71)
  })

  test('1 + (2 * 3) + (4 * (5 + 6))', () => {
    expect(day18.part1('1 + (2 * 3) + (4 * (5 + 6))')).toBe(51)
  })

  test('2 * 3 + (4 * 5)', () => {
    expect(day18.part1('2 * 3 + (4 * 5)')).toBe(26)
  })

  test('5 + (8 * 3 + 9 + 3 * 4 * 3)', () => {
    expect(day18.part1('5 + (8 * 3 + 9 + 3 * 4 * 3)')).toBe(437)
  })

  test('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))', () => {
    expect(day18.part1('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))')).toBe(12240)
  })

  test('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2', () => {
    expect(day18.part1('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2')).toBe(13632)
  })
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day18.part2(testInput)).toBe(testInput)
})
