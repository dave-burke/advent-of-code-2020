const { expect, test } = require('@jest/globals')
const { Computer } = require('./day14')
const day14 = require('./day14')

describe('part1', () => {
  test('dtob', () => {
    const computer = new Computer()
    expect(computer.dtob(73)).toBe('1001001')
  })
  test('btod', () => {
    const computer = new Computer()
    expect(computer.btod('1001001')).toBe(73)
  })
  test('step1', () => {
    const computer = new Computer()
    expect(computer.applyMask(
      '000000000000000000000000000000001011',
      'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X'))
      .toBe('000000000000000000000000000001001001')
  })
  test('input', () => {
    const testInput = [
      'mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
      'mem[8] = 11',
      'mem[7] = 101',
      'mem[8] = 0',
    ]
    expect(day14.part1(testInput)).toBe(165)
  })
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day14.part2(testInput)).toBe(testInput)
})
