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
    const item = slots[x][y]

    if (item.type === 'ship') {
      item.hit()
    } else if (item.type === 'empty') {
      slots[x][y].type = 'missed'
    }
  }

  const isAllSunk = () => {
    let hasShips = false
    for (const row of slots) {
      for (const index of row) {
        if (index.type === 'ship') {
          hasShips = true
          if (!index.isSunk()) {
            return false
          }
        }
      }
    }

    if (!hasShips) {
      return false
    }

    return true
  }

  return { placeShipAt, receiveAttack, isAllSunk, slots }
}

export default Gameboard
