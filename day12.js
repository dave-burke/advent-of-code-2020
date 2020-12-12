/*
Action N means to move north by the given value.
Action S means to move south by the given value.
Action E means to move east by the given value.
Action W means to move west by the given value.
Action L means to turn left the given number of degrees.
Action R means to turn right the given number of degrees.
Action F means to move forward by the given value in the direction the ship is currently facing.

The ship starts by facing east. Only the L and R actions change the direction the ship is facing. (That is, if the ship is facing east and the next instruction is N10, the ship would move north 10 units, but would still move east if the following action were F.)
*/
class Ship {
  constructor () {
    this.directions = ['E', 'S', 'W', 'N']
    this.x = 0
    this.y = 0
    this.degrees = 0
  }

  get direction () {
    return this.directions[(Math.floor(this.degrees / 90))]
  }

  get manhattanDistance () {
    return Math.abs(this.x) + Math.abs(this.y)
  }

  navigate (instruction) {
    const { op, arg } = instruction
      .match(/(?<op>[NSEWFLR])(?<arg>\d+)/).groups
    const amount = Number(arg)
    if (this.directions.includes(op)) {
      this.move(op, amount)
    }
    if (op === 'L') this.turn(-1 * amount)
    if (op === 'R') this.turn(amount)
    if (op === 'F') this.move(this.direction, amount)
  }

  move (heading, amount) {
    if (heading === 'N') this.y += amount
    if (heading === 'S') this.y -= amount
    if (heading === 'E') this.x += amount
    if (heading === 'W') this.x -= amount
  }

  drive (amount) {
    this.move(this.direction, amount)
  }

  turn (amount) {
    this.degrees += amount
    if (this.degrees < 0) this.degrees += 360
    if (this.degrees >= 360) this.degrees -= 360
  }
}
function part1 (input) {
  const ship = new Ship()
  for (const instruction of input) {
    ship.navigate(instruction)
  }
  return ship.manhattanDistance
}

/*
Action N means to move the waypoint north by the given value.
Action S means to move the waypoint south by the given value.
Action E means to move the waypoint east by the given value.
Action W means to move the waypoint west by the given value.
Action L means to rotate the waypoint around the ship left (counter-clockwise) the given number of degrees.
Action R means to rotate the waypoint around the ship right (clockwise) the given number of degrees.
Action F means to move forward to the waypoint a number of times equal to the given value.

The waypoint starts 10 units east and 1 unit north relative to the ship. The waypoint is relative to the ship; that is, if the ship moves, the waypoint moves with it.
*/
function part2 (input) {
  return input
}

module.exports = { part1, part2, Ship }
