// Ships of size: 5, 4, 3, 3, 2
const ShipCel = (element, player) => {
  const slots = player.gameboard.slots
  const row = element.getAttribute('row')
  const column = element.getAttribute('column')
  const ship = slots[row][column]

  const sunkCel = () => {
    const clonedEl = element.cloneNode() // Removes possilble event listeners by cloning
    clonedEl.classList.replace('bg-gray-100', 'bg-red-300')

    if (player.isComputer) {
      clonedEl.classList.remove(
        'active:bg-gray-300',
        'cursor-pointer',
        'hover:bg-gray-200',
      )
    }

    element.parentNode.replaceChild(clonedEl, element)
  }

  const outlineSunken = () => {
    for (const [i, row] of slots.entries()) {
      for (const [j, slot] of row.entries()) {
        if (slot === ship) {
          const sunkEl = document.querySelector(`[row="${i}"][column="${j}"]`)
          sunkEl.classList.replace('outline-slate-500', 'outline-red-500')
          sunkEl.classList.add('z-10')
        }
      }
    }
  }

  const handleShipCel = () => {
    sunkCel()

    if (ship.isSunk()) {
      outlineSunken()
    }

    // if (player.gameboard.isAllSunk()) {
    // TODO: Implement end game function
    // endGame()
    // alert('end')
    // }
  }

  return { handleShipCel }
}

const Grid = (gridElement, player) => {
  const createEmptyCel = (row, column) => {
    const el = document.createElement('div')
    el.className = `
       outline-slate-500 outline-2 outline bg-gray-100
    `
    el.setAttribute('row', row)
    el.setAttribute('column', column)

    if (player.isComputer) {
      el.classList.add(
        'active:bg-gray-300',
        'cursor-pointer',
        'hover:bg-gray-200',
      )

      el.addEventListener('click', () => {
        receiveAttack(row, column)
      })
    }

    return el
  }

  const handleEmptyCel = (el) => {
    return
  }

  const handleMissedCel = (el) => {
    return
  }

  const receiveAttack = (row, column) => {
    player.gameboard.receiveAttack(row, column)

    const slot = player.gameboard.slots[row][column]
    const el = document.querySelector(`[row="${row}"][column="${column}"]`)
    const shipCel = ShipCel(el, player)

    if (slot.type === 'ship') {
      shipCel.handleShipCel()
    }

    if (slot.type === 'empty') {
      handleEmptyCel(el)
    }

    if (slot.type === 'missed') {
      handleMissedCel(el)
    }

    return el
  }

  const populate = () => {
    for (const [i, row] of player.gameboard.slots.entries()) {
      for (const [j] of row.entries()) {
        const cel = createEmptyCel(i, j)
        gridElement.append(cel)
      }
    }
  }

  return { populate }
}

export default Grid
