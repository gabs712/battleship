const attacked = []

const Computer = (player) => {
  const slots = player.gameboard.slots
  const grid = document.querySelector(`[data-grid2]`)

  const wasAttacked = (row, column) => {
    for (const combination of attacked) {
      if (combination[0] === row && combination[1] === column) {
        return true
      }
    }
    return false
  }

  const getRecentShip = () => {
    for (const combination of [...attacked].reverse()) {
      const slot = slots[combination[0]][combination[1]]
      if (slot.type === 'ship') {
        return combination
      }
    }
    return null
  }

  function isSlotCoordinate(slot, row, column) {
    if (row < 0 || row > 9 || column < 0 || column > 9) {
      return false
    }
    return slots[row][column] === slot
  }

  const isShipAdjascent = (shipSlot, row, column) => {
    if (row < 0 || row > 9 || column < 0 || column > 9) {
      return false
    }

    if (isSlotCoordinate(shipSlot, row, column)) return true // Current
    if (isSlotCoordinate(shipSlot, row - 1, column)) return true // Top
    if (isSlotCoordinate(shipSlot, row + 1, column)) return true // Bottom
    if (isSlotCoordinate(shipSlot, row, column - 1)) return true // Left
    if (isSlotCoordinate(shipSlot, row, column + 1)) return true // Right

    return false
  }

  const isValidCombination = (row, column) => {
    if (wasAttacked(row, column)) {
      return false
    }

    const recentShip = getRecentShip()
    if (recentShip !== null) {
      const recentShipSlot = slots[recentShip[0]][recentShip[1]]
      if (
        !recentShipSlot.isSunk() &&
        !isShipAdjascent(recentShipSlot, row, column)
      ) {
        return false
      }
    }

    return true
  }

  const attack = () => {
    let row
    let column

    do {
      row = Math.floor(Math.random() * 10)
      column = Math.floor(Math.random() * 10)
    } while (!isValidCombination(row, column))

    attacked.push([row, column])

    const el = grid.querySelector(`[row="${row}"][column="${column}"]`)
    el.obj.receiveAttack()
  }
  return { attack }
}

export default Computer
