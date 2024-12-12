// Ships of size: 5, 4, 3, 3, 2

const Grid = (gridElement, player) => {
  const handleDefaultCel = (el, row, column) => {
    el.className = `
      cursor-pointer hover:bg-gray-200 outline-slate-500 outline-2 outline bg-gray-100
      active:bg-gray-300 
    `
    el.setAttribute('row', row)
    el.setAttribute('column', column)
  }

  const handleShipCel = (el) => {
    return
  }

  const handleEmptyCel = (el) => {
    return
  }

  const handleMissedCel = (el) => {
    return
  }

  const getItemElement = (item, row, column) => {
    const el = document.createElement('div')

    handleDefaultCel(el, row, column)

    if (item.type === 'ship') {
      handleShipCel(el)
    }

    if (item.type === 'empty') {
      handleEmptyCel(el)
    }

    if (item.type === 'missed') {
      handleMissedCel(el)
    }

    return el
  }

  const renderSlots = () => {
    gridElement.innerHtml = ''
    for (const [i, row] of player.gameboard.slots.entries()) {
      for (const [j, item] of row.entries()) {
        const element = getItemElement(item, i, j)
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
