const { expect, test } = require('@jest/globals')
const day2 = require('./day2')

test('part1 counts invalid passwords', () => {
  const testInput = [
    '1-3 a: abcde',
    '1-3 b: cdefg',
    '2-9 c: ccccccccc',
  ]
  expect(day2.part1(testInput)).toBe(2)
})

test('parseLine identifies parts of input', () => {
  const testInput = '1-3 a: abc'
  expect(day2.parseLine(testInput)).toStrictEqual({
    min: 1,
    max: 3,
    char: 'a',
    pwd: 'abc',
  })
})

test('countChars counts instances of a char in a string', () => {
  expect(day2.countChars('abcabc', 'a')).toBe(2)
})
