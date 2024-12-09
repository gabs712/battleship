const createSlots = () => {
  const slots = []

  for (let i = 0; i < 10; i++) {
    slots[i] = []
    for (let j = 0; j < 10; j++) {
      slots[i][j] = { type: 'empty' }
    }
  }
  return slots
}

const Gameboard = () => {
  const slots = createSlots()

  const placeShipAt = (ship, x, y) => {
    slots[x][y] = ship
  }

  const receiveAttack = (x, y) => {
    const index = slots[x][y]
  }

  const isAllSunk = () => {
    return
  }

  return { placeShipAt, receiveAttack, isAllSunk, slots }
}

export default Gameboard
