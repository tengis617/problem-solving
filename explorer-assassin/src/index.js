
const sumDigits = n => n.toString().split('').reduce((acc, x) => acc + Number(x), 0)

const findMaxConsecutive = n => {
  // finds the maximum number where x + 1 is less than n
  const numberOfNines = Math.floor(n / 9)
  const firstDigit = n % 9
  const max = Number(`${firstDigit + 1}${String(9).repeat(numberOfNines)}`)
  return max - 1
}

module.exports = {
  sumDigits,
  findMaxConsecutive
}