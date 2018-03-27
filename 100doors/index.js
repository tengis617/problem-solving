const run = (max) => {
  let doors = Array(100).fill(0)
  for (let i = 1; i <= max; i++) {
    doors = toggleDoors(doors, i)
  }
  return doors
}
const toggleDoors = (doors, skip = 1) => doors.map((d, i) => (i + 1) % skip === 0 ? toggleDoor(d) : d)

const toggleDoor = d => isOpen(d) ? 0 : 1
const isOpen = d => d === 1

module.exports = {
  toggleDoor,
  toggleDoors,
  isOpen,
  run
}