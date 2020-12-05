const { expect, test } = require('@jest/globals')
const day5 = require('./day5')

/*
*/
test.each`
  seat            | row    | col  | id
  ${'FBFBBFFRLR'} | ${44}  | ${5} | ${357}
  ${'BFFFBBFRRR'} | ${70}  | ${7} | ${567}
  ${'FFFBBBFRRR'} | ${14}  | ${7} | ${119}
  ${'BBFFBBFRLL'} | ${102} | ${4} | ${820}
`('part 1 handles $seat', ({ seat, row, col, id }) => {
  const ticket = new day5.Ticket(seat)
  expect({
    seat: ticket.seat,
    row: ticket.row,
    col: ticket.col,
    id: ticket.id,
  }).toStrictEqual({ seat, row, col, id })
})

test('part1', () => {
  const testInput = [
    'FBFBBFFRLR',
    'BFFFBBFRRR',
    'FFFBBBFRRR',
    'BBFFBBFRLL',
  ]
  expect(day5.part1(testInput)).toBe(820)
})

test('part2', () => {
  const testInput = [
    'b',
  ]
  expect(day5.part2(testInput)).toBe(testInput)
})
