const attacked = []

const Computer = () => {
  const grid = document.querySelector(`[data-grid2]`)

  const isValidCombination = (row, column) => {
    for (const combination of attacked) {
      if (combination[0] === row && combination[1] === column) {
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
