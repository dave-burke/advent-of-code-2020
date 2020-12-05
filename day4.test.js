const { expect, test } = require('@jest/globals')
const day4 = require('./day4')

const input = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`

test('part1', () => {
  expect(day4.part1(input)).toBe(2)
})

test('part2 detects invalid passports', () => {
  const invalidInput = `eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946

hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007`
  expect(day4.part2(invalidInput)).toBe(0)
})

test('part2 detects valid passports', () => {
  const invalidInput = `pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`
  expect(day4.part2(invalidInput)).toBe(4)
})

describe('validators', () => {
  describe('byr', () => {
    const validator = day4.validators.byr
    test('byr accepts valid', () => {
      expect(validator('2002')).toBe(true)
    })
    test('byr accepts invalid', () => {
      expect(validator('2003')).toBe(false)
    })
    test('byr rejects 19210', () => {
      expect(validator('19210')).toBe(false)
    })
    test('byr rejects non-numeric', () => {
      expect(validator('abc')).toBe(false)
    })
  })
  describe('hgt', () => {
    const validator = day4.validators.hgt
    test('hgt accepts 60in', () => {
      expect(validator('60in')).toBe(true)
    })
    test('hgt accepts 190cm', () => {
      expect(validator('190cm')).toBe(true)
    })
    test('hgt rejects 190in', () => {
      expect(validator('190in')).toBe(false)
    })
    test('hgt rejects 190', () => {
      expect(validator('190')).toBe(false)
    })
  })
  describe('hcl', () => {
    const validator = day4.validators.hcl
    test('hcl accepts valid values', () => {
      expect(validator('#123abc')).toBe(true)
    })
    test('hcl rejects non-hex letters', () => {
      expect(validator('#123abz')).toBe(false)
    })
    test('hcl rejects missing pound sign', () => {
      expect(validator('123abc')).toBe(false)
    })
  })
  describe('ecl', () => {
    const validator = day4.validators.ecl
    test('ecl accepts brn', () => {
      expect(validator('brn')).toBe(true)
    })
    test('ecl rejects wat', () => {
      expect(validator('wat')).toBe(false)
    })
  })
  describe('pid', () => {
    const validator = day4.validators.pid
    test('pid accepts 9 digits', () => {
      expect(validator('000000001')).toBe(true)
    })
    test('pid rejects 10 digits', () => {
      expect(validator('0123456789')).toBe(false)
    })
  })
})
