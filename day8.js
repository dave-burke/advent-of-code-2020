class InfiniteLoopError extends Error {
  constructor (currentState, nextState) {
    super(`Tried to step to prior index ${nextState.index} when accumulator was ${nextState.index}`)
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
    console.log(`${this.toString()} -> ${this.program[this.index].toString()} -> ${nextState.toString()}`)
    if (this.history.some(priorState => priorState.index === nextState.index)) {
      throw new InfiniteLoopError(this, nextState)
    }
    return nextState
  }

  toString () {
    return `${this.index}|${this.accumulator}`
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

function runProgram (program) {
  let state = new State(program, 0, 0, [])
  while (state.index < program.length) {
    state = state.step()
  }
  return state
}

function part1 (input) {
  const program = input.map(line => parseLine(line))
  try {
    const finalState = runProgram(program)
    return finalState.accumulator
  } catch (err) {
    console.log(err)
    return err.currentState.accumulator
  }
}

function copyProgram (program) {
  return program.map(instruction => new Instruction(instruction.command, instruction.amount))
}

function part2 (input) {
  const program = input.map(line => parseLine(line))

  for (let i = 0; i < program.length; i++) {
    const copy = copyProgram(program)
    switch (copy[i].command) {
      case ('nop'):
        copy[i].command = 'jmp'
        try {
          const result = runProgram(copy)
          return result.accumulator
        } catch (err) {
          continue
        }
      case ('jmp'):
        copy[i].command = 'nop'
        try {
          const result = runProgram(copy)
          return result.accumulator
        } catch (err) {
          continue
        }
      default:
        continue
    }
  }
  return null
}

module.exports = { part1, part2 }
