const { expect } = require('@jest/globals')
const day2 = require('./day2')

test('returns the input', () => {
  expect(day2.part1('test')).toBe('test')
})
