const { expect, test } = require('@jest/globals')
const day13 = require('./day13')

const testInput = [
  '939',
  '7,13,x,x,59,x,31,19',
]
test('part1', () => {
  expect(day13.part1(testInput)).toBe(295)
})

describe('part2', () => {
  test('base example', () => {
    expect(day13.part2(testInput)).toBe(1068781)
  })

  test('17,x,13,19', () => {
    expect(day13.part2(['', '17,x,13,19'])).toBe(3417)
  })
  test('67,7,59,61', () => {
    expect(day13.part2(['', '67,7,59,61'])).toBe(754018)
  })
  test('67,x,7,59,61', () => {
    expect(day13.part2(['', '67,x,7,59,61'])).toBe(779210)
  })
  test('67,7,x,59,61', () => {
    expect(day13.part2(['', '67,7,x,59,61'])).toBe(1261476)
  })
  test('1789,37,47,1889', () => {
    expect(day13.part2(['', '1789,37,47,1889'])).toBe(1202161486)
  })
  test('7,5,2', () => {
    expect(day13.part2(['', '7,5,2'])).toBe(14)
  })
  test('7,x,5,x,2', () => {
    expect(day13.part2(['', '7,x,5,x,2'])).toBe(28)
  })
})
