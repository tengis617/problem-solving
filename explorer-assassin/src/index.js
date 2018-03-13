
const sumDigits = n => n.toString().split('').reduce((acc, x) => acc + Number(x), 0)

module.exports = {
  sumDigits
}