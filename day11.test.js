const { expect, test } = require('@jest/globals')
const day11 = require('./day11')

describe('getNeighbors', () => {
  test('middle', () => {
    expect(day11.getNeighbors([
      ['#', 'L', '#'],
      ['.', 'L', 'L'],
      ['#', '.', '#']],
    1, 1)).toStrictEqual(
      ['#', 'L', '#', '.', 'L', '#', '.', '#'])
  })
  test('corner', () => {
    expect(day11.getNeighbors([
      ['#', 'L', '#'],
      ['.', 'L', 'L'],
      ['#', '.', '#']],
    0, 0)).toStrictEqual(
      ['L', '.', 'L'])
  })
})

describe('countNeighbors', () => {
  test('all neighbors', () => {
    expect(day11.countNeightbors([
      ['#', '#', '#'],
      ['#', 'L', '#'],
      ['#', '#', '#']],
    1, 1)).toBe(8)
  })
})
const step0 = [
  'L.LL.LL.LL',
  'LLLLLLL.LL',
  'L.L.L..L..',
  'LLLL.LL.LL',
  'L.LL.LL.LL',
  'L.LLLLL.LL',
  '..L.L.....',
  'LLLLLLLLLL',
  'L.LLLLLL.L',
  'L.LLLLL.LL',
]
const step1 = [
  '#.##.##.##',
  '#######.##',
  '#.#.#..#..',
  '####.##.##',
  '#.##.##.##',
  '#.#####.##',
  '..#.#.....',
  '##########',
  '#.######.#',
  '#.#####.##',
]

const step2 = [
  '#.LL.L#.##',
  '#LLLLLL.L#',
  'L.L.L..L..',
  '#LLL.LL.L#',
  '#.LL.LL.LL',
  '#.LLLL#.##',
  '..L.L.....',
  '#LLLLLLLL#',
  '#.LLLLLL.L',
  '#.#LLLL.##',
]

test('parse', () => {
  expect(day11.parse(['#.L'])).toStrictEqual([['#', '.', 'L']])
})

test('areEqual', () => {
  expect(day11.areEqual(step0, step0)).toBe(true)
  expect(day11.areEqual(step1, step1)).toBe(true)
  expect(day11.areEqual(step2, step2)).toBe(true)
})

test('step', () => {
  expect(day11.step(day11.parse(step0)))
    .toStrictEqual(day11.parse(step1))
  expect(day11.step(day11.parse(step1)))
    .toStrictEqual(day11.parse(step2))
})
test('part1', () => {
  expect(day11.part1(step0)).toBe(37)
})

describe('countNeighbors2', () => {
  test('should find neighbors in all directions', () => {
    const allNeighbors = day11.parse([
      '.......#.',
      '...#.....',
      '.#.......',
      '.........',
      '..#L....#',
      '....#....',
      '.........',
      '#........',
      '...#.....',
    ])
    expect(day11.countNeightbors2(allNeighbors, 4, 3)).toBe(8)
  })
  test('should find neighbors in no directions', () => {
    const noNeighbors = day11.parse([
      '.##.##.',
      '#.#.#.#',
      '##...##',
      '...L...',
      '##...##',
      '#.#.#.#',
      '.##.##.',
    ])
    expect(day11.countNeightbors2(noNeighbors, 3, 3)).toBe(0)
  })
})

test('part2', () => {
  expect(day11.part2(step0)).toBe(26)
})
