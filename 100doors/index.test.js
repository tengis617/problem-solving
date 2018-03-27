const test = require('tape')
const hundredDoors = require('.')

test('integration test', t => {
  t.test('should pass problem solution', t => {
    const expected = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
    const result = hundredDoors.run(100).reduce((acc, d, i) => {
      if(hundredDoors.isOpen(d)) {
        acc.push(i + 1)
      }
      return acc
    }, [])
    t.deepEqual(result, expected, 'should return expected value')
    t.end()
  })
})

test('unit test', t => {
  t.test('toggleDoor', t => {
    t.test('should return 0 when door is 1', t => {
      const door = 1
      const toggledDoor = hundredDoors.toggleDoor(door)
      t.equal(toggledDoor, 0, 'should return 0')
      t.end()
    })
  })
  t.test('toggleDoors', t => {
    t.test('should return 0 when doors are 1', t => {
      const doors = [1, 1, 1]
      const toggledDoors = hundredDoors.toggleDoors(doors)
      t.equal(toggledDoors[0], 0, 'should return 0')
      t.equal(toggledDoors[1], 0, 'should return 0')
      t.equal(toggledDoors[2], 0, 'should return 0')
      t.end()
    })
    t.test('should return 0 1 0 when doors are 1 0 1', t => {
      const doors = [1, 0, 1]
      const toggledDoors = hundredDoors.toggleDoors(doors)
      t.equal(toggledDoors[0], 0, 'should return 0')
      t.equal(toggledDoors[1], 1, 'should return 0')
      t.equal(toggledDoors[2], 0, 'should return 0')
      t.end()
    })
    t.test('should return 0 1 0 1 0 when doors are 0 0 0 0 0 and skip is 2', t => {
      const doors = [0, 0, 0, 0, 0]
      const toggledDoors = hundredDoors.toggleDoors(doors, 2)
      t.equal(toggledDoors[0], 0, 'should return 0')
      t.equal(toggledDoors[1], 1, 'should return 1')
      t.equal(toggledDoors[2], 0, 'should return 0')
      t.equal(toggledDoors[3], 1, 'should return 1')
      t.equal(toggledDoors[4], 0, 'should return 0')
      t.end()
    })
  })
})