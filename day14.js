
class Computer {
  constructor () {
    this.mask = undefined
    this.mem = new Map()
  }

  dtob (decimalValue) {
    return Number(decimalValue).toString(2)
  }

  btod (binaryValue) {
    return parseInt(binaryValue, 2)
  }

  applyMask (valueBits, mask) {
    const result = []
    for (let i = 0; i < valueBits.length; i++) {
      if (mask[i] === 'X') {
        result.push(valueBits[i])
      } else {
        result.push(mask[i])
      }
    }
    return result.join('')
  }
}
function part1 (input) {
  return input
}

function part2 (input) {
  return input
}

module.exports = { part1, part2, Computer }
