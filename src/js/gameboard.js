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
  const slot = createSlots()

  const placeShipAt = (ship, x, y) => {
    slot[x][y] = ship
  }

  const receiveAttack = (x, y) => {
    const item = slot[x][y]

    if (item.type === 'ship') {
      item.hit()
    } else if (item.type === 'empty') {
      slot[x][y].type = 'missed'
    }
  }

  const isAllSunk = () => {
    return
  }

  return { placeShipAt, receiveAttack, isAllSunk, slot }
}

export default Gameboard
