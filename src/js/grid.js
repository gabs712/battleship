// Ships of size: 5, 4, 3, 3, 2

const Grid = (gridElement, player) => {
  const handleShip = (el) => {
    return
  }

  const handleEmpty = (el) => {
    return
  }

  const handleMissed = (el) => {
    return
  }

  const getItemElement = (item) => {
    const el = document.createElement('div')
    el.className = `
      cursor-pointer hover:bg-gray-200 outline-slate-500 outline-2 outline bg-gray-100
      active:bg-gray-300 
    `
    if (item.type === 'ship') {
      handleShip(el)
    }

    if (item.type === 'empty') {
      handleEmpty(el)
    }

    if (item.type === 'missed') {
      handleMissed(el)
    }

    return el
  }

  const renderSlot = () => {
    for (const row of player.gameboard.slots) {
      for (const item of row) {
        gridElement.append(getItemElement(item))
      }
    }
  }

  const setup = () => {
    renderSlot()
  }

  return { setup }
}

export default Grid
