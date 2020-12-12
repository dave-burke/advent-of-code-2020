const { expect, test } = require('@jest/globals')
const { Ship } = require('./day12')
const day12 = require('./day12')

describe('ship', () => {
  test('direction begins facing E', () => {
    const ship = new Ship()
    expect(ship.direction).toBe('E')
  })
  test.each`
  start | deg | end
  ${'E'} | ${90}  | ${'S'}
  ${'E'} | ${180} | ${'W'}
  ${'E'} | ${270} | ${'N'}
  ${'E'} | ${-90} | ${'N'}
  ${'E'} | ${-180} | ${'W'}
  ${'E'} | ${-270} | ${'S'}
  `('$start + $deg = $end', ({ start, deg, end }) => {
    const ship = new Ship()
    ship.turn(90)
    expect(ship.direction).toBe('N')
  })
  test('turns result in valid degrees', () => {
    const ship = new Ship()
    ship.turn(360)
    expect(ship.direction).toBe('E')
  })
})
test('part1', () => {
  const testInput = [
    'F10',
    'N3',
    'F7',
    'R90',
    'F11',
  ]
  expect(day12.part1(testInput)).toBe(25)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day12.part2(testInput)).toBe(testInput)
})
