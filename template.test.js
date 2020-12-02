const { expect, test } = require('@jest/globals')
const template = require('./template')

test('part1', () => {
  const testInput = [
    'a',
  ]
  expect(template.part1(testInput)).toBe(testInput)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(template.part2(testInput)).toBe(testInput)
})
