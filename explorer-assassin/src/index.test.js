const test = require('tape')
const { sumDigits, findMaxConsecutive } = require('./index')

test('sumDigits test', (t) => {
  t.plan(5)
  t.equal(sumDigits(55), 10, 'should return 10 when input is 55')
  t.equal(sumDigits(1), 1, 'should return 1 when input is 1')
  t.equal(sumDigits(10000000000000), 1, 'should handle large numbers')
  t.equal(sumDigits(12345), 15, 'should return 15 when input is 12345')
  t.equal(sumDigits(0), 0, 'should return 0 if input is 0')
})
test('findMaxConsecutive test', (t) => {
  t.plan(5)
  t.equal(findMaxConsecutive(22), 598)
  t.equal(findMaxConsecutive(21), 498)
  t.equal(findMaxConsecutive(11), 38)
  t.equal(findMaxConsecutive(1), 1)
  t.equal(findMaxConsecutive(10), 28)
})