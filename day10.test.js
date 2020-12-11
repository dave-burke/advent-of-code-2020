const { expect, test } = require('@jest/globals')
const day10 = require('./day10')

const smallInput = [
  '16', '10', '15', '5', '1', '11', '7',
  '19', '6', '12', '4',
]
const largeInput = [
  '28', '33', '18', '42', '31', '14', '46',
  '20', '48', '47', '24', '23', '49', '45',
  '19', '38', '39', '11', '1', '32', '25',
  '35', '8', '17', '7', '9', '4', '2',
  '34', '10', '3',
]

describe('part1', () => {
  test('small example', () => {
    expect(day10.part1(smallInput)).toBe(35)
  })
  test('large example', () => {
    expect(day10.part1(largeInput)).toBe(220)
  })
})

describe('part2', () => {
  test('small example', () => {
    expect(day10.part2(smallInput)).toBe(8)
  })
  test('large example', () => {
    expect(day10.part2(largeInput)).toBe(19208)
  })
})
