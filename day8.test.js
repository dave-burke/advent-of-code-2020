const { expect, test } = require('@jest/globals')
const day8 = require('./day8')

test('part1', () => {
  const testInput = [
    'nop +0',
    'acc +1',
    'jmp +4',
    'acc +3',
    'jmp -3',
    'acc -99',
    'acc +1',
    'jmp -4',
    'acc +6',
  ]
  expect(day8.part1(testInput)).toBe(5)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day8.part2(testInput)).toBe(testInput)
})
