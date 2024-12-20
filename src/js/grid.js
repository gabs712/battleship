import { GenericCell, EmptyCell, ShipCell } from './cell'

// Ships of size: 5, 4, 3, 3, 2
const Grid = (gridElement, player) => {
  const cells = []

  const restart = () => {
    gridElement.innerHTML = ''

    const slots = player.gameboard.slots
    for (const [i, row] of slots.entries()) {
      for (const [j] of row.entries()) {
        const genericCell = GenericCell(i, j).get()
        gridElement.append(genericCell)
      }
    }
  }

  const getCell = (row, column) => {
    const slot = player.gameboard.slots[row][column]

    if (slot.type === 'ship') {
      return ShipCell(player, column, row)
    }

    if (slot.type === 'empty') {
      return EmptyCell(player, column, row)
    }
  }

  const start = () => {
    gridElement.innerHTML = ''

    const slots = player.gameboard.slots
    for (const [i, row] of slots.entries()) {
      for (const [j] of row.entries()) {
        const cell = getCell(i, j)
        gridElement.append(cell.get())
      }
    }
  }

  return { restart, start }
}

export default Grid
