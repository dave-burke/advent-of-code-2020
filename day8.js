class Instruction {
  constructor (command, amount) {
    this.command = command
    this.amount = amount
  }
}
class State {
  constructor (program, index, accumulator, history) {
    this.program = program
    this.index = index
    this.accumulator = accumulator
    this.history = history
  }

  step () {
    const nextState = this.apply(this.program[this.index])
    if (history.some(priorState => priorState.index === nextState.index)) {
      throw new Error(`Tried to step to prior index ${nextState.index} when accumulator was ${this.accumulator}`)
    }
    return nextState
  }

  apply (instruction) {
    switch (instruction.command) {
      case ('nop'):
        return new State(this.program, this.index + 1, this.accumulator, [...this.history, this])
      case ('acc'):
        return new State(this.program, this.index + 1, this.accumulator + instruction.amount, [...this.history, this])
      case ('jmp'):
        return new State(this.program, this.index + instruction.amount, this.accumulator, [...this.history, this])
      default:
        throw new Error(`Unrecognized command: ${instruction} (${instruction.amount})`)
    }
  }
}

const parseLine = function (line) {
  const match = /(\w+) ([+-]\d+)/.exec(line)
  return new Instruction(match.groups[1], match.groups[2])
}

function part1 (input) {
  const program = input.map(line => parseLine(line))
  let state = new State(program, 0, 0, [])
  while (true) {
    state = state.step()
  }
}

function part2 (input) {
  return input
}

module.exports = { part1, part2 }
