const getDistinctChars = function (group) {
  return group
    .replace(/\s/g, '').split('')
    .reduce((distinct, next) => distinct.add(next), new Set())
}
function part1 (input) {
  return input.split('\n\n')
    .map(group => getDistinctChars(group))
    .map(distinct => distinct.size)
    .reduce((sum, next) => sum + next, 0)
}

function part2 (input) {
  return input.split('\n\n')
    .map(group => {
      const chars = getDistinctChars(group)
      const people = group.split('\n')
      return Array.from(chars)
        .filter(char => people.every(person => person.includes(char)))
        .length
    })
    .reduce((sum, next) => sum + next, 0)
}

module.exports = { part1, part2 }
