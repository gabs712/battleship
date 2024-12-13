// Ships of size: 5, 4, 3, 3, 2
const GridShip = (el, player) => {
  const slots = player.gameboard.slots
  const row = el.getAttribute('row')
  const column = el.getAttribute('column')
  const ship = slots[row][column]

  const sunkCel = () => {
    const cloneEl = el.cloneNode() // Removes event listeners by cloning
    cloneEl.classList.remove(
      'bg-gray-100',
      'active:bg-gray-300',
      'cursor-pointer',
      'hover:bg-gray-200',
    )
    cloneEl.classList.add('bg-red-300')

    el.parentNode.replaceChild(cloneEl, el)
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
    el.addEventListener('click', () => {
      sunkCel(el)

      if (ship.isSunk()) {
        outlineSunken()
      }

      // if (player.gameboard.isAllSunk()) {
      // TODO: Implement end game function
      // endGame()
      // alert('end')
      // }
    })
  }
  return { handleShipCel }
}

const Grid = (gridElement, player) => {
  const handleDefaultCel = (el, row, column) => {
    el.className = `
      cursor-pointer hover:bg-gray-200 outline-slate-500 outline-2 outline bg-gray-100
      active:bg-gray-300 
    `
    el.setAttribute('row', row)
    el.setAttribute('column', column)

    el.addEventListener('click', () => {
      player.gameboard.receiveAttack(row, column)
    })
  }

  const handleEmptyCel = (el) => {
    return
  }

  const handleMissedCel = (el) => {
    return
  }

  const getSlotElement = (slot, row, column) => {
    const el = document.createElement('div')

    handleDefaultCel(el, row, column)

    if (slot.type === 'ship') {
      GridShip(el, player).handleShipCel()
    }

    if (slot.type === 'empty') {
      handleEmptyCel(el)
    }

    if (slot.type === 'missed') {
      handleMissedCel(el)
    }

    return el
  }

  const renderSlots = () => {
    gridElement.innerHtml = ''
    for (const [i, row] of player.gameboard.slots.entries()) {
      for (const [j, slot] of row.entries()) {
        const element = getSlotElement(slot, i, j)
        gridElement.append(element)
      }
    }
  }

  const setup = () => {
    renderSlots()
  }

  return { setup }
}

export default Grid
