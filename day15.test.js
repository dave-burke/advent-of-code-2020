const { expect, test } = require('@jest/globals')
const day15 = require('./day15')

describe('part1', () => {
  test('0,3,6', () => {
    expect(day15.part1('0,3,6')).toBe(436)
  })
  test('1,3,2', () => {
    expect(day15.part1('1,3,2')).toBe(1)
  })
  test('2,1,3', () => {
    expect(day15.part1('2,1,3')).toBe(10)
  })
  test('1,2,3', () => {
    expect(day15.part1('1,2,3')).toBe(27)
  })
  test('2,3,1', () => {
    expect(day15.part1('2,3,1')).toBe(78)
  })
  test('3,2,1', () => {
    expect(day15.part1('3,2,1')).toBe(438)
  })
  test('3,1,2', () => {
    expect(day15.part1('3,1,2')).toBe(1836)
  })
})

// Part 2 tests take a while (relatively) and aren't materially different from the part1 tests
