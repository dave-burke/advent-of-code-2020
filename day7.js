const parseLine = function (line) {
  const [color, refString] = line.split(' bags contain ')
  const refs = refString.replace(/ bags?\.?/g, '').split(', ')
    .map(refSpec => {
      const regex = /^(?<n>\d+) (?<color>[a-z ]+)$/
      const match = regex.exec(refSpec)
      if (match === null) {
        console.log(`'${refSpec}' does not match ${regex}`)
        return { color, refs: [] }
      }
      return {
        n: Number(match.groups.n),
        color: match.groups.color,
      }
    })
  return {
    color,
    refs,
  }
}

// (Array<Ref<n,color>>, String, Map<color, Array<Ref<n,color>>>): Array<Ref<n,color>>
const findBagPath = function (currentPath, destColor, bagMap) {
  const currentRef = currentPath[currentPath.length - 1]
  if (currentRef.color === destColor) {
    return currentPath
  }
  for (const ref of bagMap.get(currentRef.color)) {
    if (currentPath.some(step => step.color === ref.color)) {
      continue // avoid cycles
    }
    const refPath = findBagPath([...currentPath, ref], destColor, bagMap)
    if (refPath !== null) {
      return refPath
    }
  }
  return null // no path found
}

function part1 (input) {
  const bags = input
    .map(line => parseLine(line))
    .reduce((result, next) => result.set(next.color, next.refs), new Map())

  let validPaths = 0
  const destColor = 'shiny gold'
  for (const color of bags.keys()) {
    if (color === destColor) {
      continue
    }
    console.log(`Evaluating ${color} -> ${bags.get(color)}`)
    const path = findBagPath([{ n: 0, color }], destColor, bags)
    if (path !== null) {
      validPaths += 1
    }
    console.log(path)
  }
  return validPaths
}

function part2 (input) {
  return input
}

module.exports = { part1, part2 }
