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
    return this.direction(Math.floor(this.degrees / 90))
  }

  get manhattanDistance () {
    return Math.abs(this.x) * Math.abs(this.y)
  }

  navigate (instruction) {
    const [op, amount] = instruction.match(/([NSEWFLR])(\d+)/).groups
    if (this.directions.includes(op)) {
      this.move(op, amount)
    }
    if (op === 'L') this.turn(-1 * amount)
    if (op === 'R') this.turn(amount)
    if (op === 'F') this.move(this.direction, amount)
  }

  move (heading, amount) {
    if (heading === 'N') this.y++
    if (heading === 'S') this.y--
    if (heading === 'E') this.x++
    if (heading === 'W') this.x--
  }

  drive (amount) {
    this.move(this.direction, amount)
  }

  turn (degrees, amount) {
    this.degrees += amount
  }
}
function part1 (input) {
  const ship = new Ship()
  for (const instruction of input) {
    ship.navigate(instruction)
  }
  return ship.manhattanDistance
}

function part2 (input) {
  return input
}

module.exports = { part1, part2 }
