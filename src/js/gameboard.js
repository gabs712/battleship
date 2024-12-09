const createSlots = () => {
  const slots = []

  for (let i = 0; i < 10; i++) {
    slots[i] = []
    for (let j = 0; j < 10; j++) {
      slots[i][j] = null
    }
  }
  return slots
}

const Gameboard = () => {
  const slots = createSlots()

  const createBoard = () => {
    return
  }

  const placeShipAt = (coordinate) => {
    return
  }

  const receiveAttack = (coordinate) => {
    return
  }

  const isAllSunk = () => {
    return
  }

  return { placeShipAt, receiveAttack, isAllSunk, slots }
}

export default Gameboard
