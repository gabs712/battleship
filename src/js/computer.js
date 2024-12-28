const attacked = []

const Computer = (player) => {
  const grid = document.querySelector(`[data-grid2]`)

  const isValidCombination = (row, column) => {
    const slot = player.gameboard.slots[row][column]
    console.log(slot)

    if (slot.type === 'missed') {
      console.log(1)
      return false
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
