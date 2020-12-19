const { expect, test } = require('@jest/globals')
const day19 = require('./day19')

test('part1', () => {
  const testInput = `0: 4 1 5
1: 2 3 | 3 2
2: 4 4 | 5 5
3: 4 5 | 5 4
4: "a"
5: "b"

ababbb
bababa
abbbab
aaabbb
aaaabbb`
  expect(day19.part1(testInput)).toBe(2)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day19.part2(testInput)).toBe(testInput)
})
