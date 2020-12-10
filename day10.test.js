const { expect, test } = require('@jest/globals')
const day10 = require('./day10')

describe('part1', () => {
  test('small example', () => {
    const testInput = [
      '16', '10', '15', '5', '1', '11', '7',
      '19', '6', '12', '4',
    ]
    expect(day10.part1(testInput)).toBe(35)
  })
  test('large example', () => {
    const testInput = [
      '28', '33', '18', '42', '31', '14', '46',
      '20', '48', '47', '24', '23', '49', '45',
      '19', '38', '39', '11', '1', '32', '25',
      '35', '8', '17', '7', '9', '4', '2',
      '34', '10', '3',
    ]
    expect(day10.part1(testInput)).toBe(220)
  })
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day10.part2(testInput)).toBe(testInput)
})
