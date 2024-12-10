// Ships of size: 5, 4, 3, 3, 2

const Grid = () => {
  const grid1 = document.querySelector('[data-grid1]')
  const grid2 = document.querySelector('[data-grid2]')

  const getItemElement = (item) => {
    const el = document.createElement('div')
    el.className = `
cursor-pointer hover:bg-gray-200 outline-slate-500 outline-2 outline bg-gray-100
active:bg-gray-300 
`
    return el
  }

  const renderSlot = (grid, slot) => {
    for (const row of slot) {
      for (const item of row) {
        grid.append(getItemElement(item))
      }
    }
  }

  const setup = (slot1, slot2) => {
    renderSlot(grid1, slot1)
    renderSlot(grid2, slot2)
  }

  return { setup }
}

export default Grid
