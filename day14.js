function applyMask (value, mask) {
  const result = []
  for (let i = 0; i < value.length; i++) {
    if (mask[i] === 'X') {
      result.push(value[i])
    } else {
      result.push(mask[i])
    }
  }
  return result.join('')
}
function part1 (input) {
  return input
}

function part2 (input) {
  return input
}

module.exports = { part1, part2, applyMask }
