import { GenericCell, EmptyCell, ShipCell } from './cell'

const Grid = (gridElement, player) => {
  const setup = () => {
    gridElement.innerHTML = ''

    const slots = player.gameboard.slots
    for (const [i, row] of slots.entries()) {
      for (const [j] of row.entries()) {
        const genericCell = GenericCell(player, i, j).get()
        gridElement.append(genericCell)
      }
    }
  }

  const getCell = (row, column) => {
    const slot = player.gameboard.slots[row][column]

    if (slot.type === 'ship') {
      const shipCell = ShipCell(player, column, row)

      if (!player.isComputer) {
        shipCell.get().classList.add('bg-violet-200')
      }

      return shipCell
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
        cell.get().obj = cell
        gridElement.append(cell.get())
      }
    }
  }

  return { setup, start }
}

export default Grid
