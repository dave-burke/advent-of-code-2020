const fields = [
  'byr',
  'iyr',
  'eyr',
  'hgt',
  'hcl',
  'ecl',
  'pid',
  // 'cid',
]

const isValid = function (passport) {
  return fields.every(field => passport.includes(field))
}
function part1 (input) {
  const passports = input.split('\n\n')
  return passports.filter(passport => isValid(passport)).length
}

function part2 (input) {
  return input
}

module.exports = { part1, part2 }
