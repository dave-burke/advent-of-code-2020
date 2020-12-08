class InfiniteLoopError extends Error {
  constructor (currentState, nextState) {
    super(`Tried to step to prior index ${nextState.index} when accumulator was ${currentState.index}`)
    this.currentState = currentState
    this.nextState = nextState
  }
}
class Instruction {
  constructor (command, amount) {
    this.command = command
    this.amount = Number(amount)
  }

  toString () {
    return `${this.command}(${this.amount})`
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
    if (this.history.some(priorState => priorState.index === nextState.index)) {
      throw new InfiniteLoopError(this, nextState)
    }
    console.log(nextState.toString())
    return nextState
  }

  toString () {
    return `${this.program[this.index].toString()}: ${this.accumulator}`
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
  return new Instruction(match[1], match[2])
}

function part1 (input) {
  const program = input.map(line => parseLine(line))
  let state = new State(program, 0, 0, [])
  try {
    while (true) {
      state = state.step()
    }
  } catch (err) {
    if (err instanceof InfiniteLoopError) {
      return err.currentState.index
    } else {
      throw err
    }
  }
}

function part2 (input) {
  return input
}

module.exports = { part1, part2 }
