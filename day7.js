const parseLine = function (line) {
  const [color, refString] = line.split(' bags contain ')
  const refs = refString.replace(/ bags?\.?/g, '').split(', ')
    .map(refSpec => {
      const regex = /^(?<n>\d+) (?<color>[a-z ]+)$/
      const match = regex.exec(refSpec)
      if (match === null) {
        return null // expected for '...contain no other bags.'
      }
      return {
        n: Number(match.groups.n),
        color: match.groups.color,
      }
    })
    .filter(ref => ref != null)
  return {
    color,
    refs,
  }
}

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

// bags = Map<color, Array<Ref<n, color>>
function countBags (color, bags) {
  let nBags = 0
  const refs = bags.get(color)
  for (const ref of refs) {
    nBags = nBags + ref.n + (ref.n * countBags(ref.color, bags))
  }
  return nBags
}

function part2 (input) {
  const bags = input
    .map(line => parseLine(line))
    .reduce((result, next) => result.set(next.color, next.refs), new Map())

  return countBags('shiny gold', bags)
}

module.exports = { part1, part2 }
