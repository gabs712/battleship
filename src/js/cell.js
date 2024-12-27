const GenericCell = (column, row) => {
  const el = newElement()

  function newElement() {
    const el = document.createElement('div')
    el.className = `
       outline-slate-500 outline-2 outline bg-gray-100
    `
    el.setAttribute('row', row)
    el.setAttribute('column', column)

    return el
  }

  const addInteractivity = (cb) => {
    addInteractiveEffects(true)
    addAttackEvent(cb)
  }

  const addInteractiveEffects = (boolean) => {
    const effects = [
      'cursor-pointer',
      'hover:bg-gray-200',
      'active:bg-gray-300',
    ]

    if (boolean) {
      el.classList.add(...effects)
    } else {
      el.classList.remove(...effects)
    }
  }

  function addAttackEvent(cb) {
    el.addEventListener(
      'click',
      () => {
        cb()
        addInteractiveEffects(false)
      },
      { once: true },
    )
  }

  const get = () => {
    return el
  }

  return {
    column,
    row,
    get,
    addInteractivity,
  }
}

const EmptyCell = (player, column, row) => {
  const cell = GenericCell(column, row)
  const el = cell.get()

  if (player.isComputer) {
    cell.addInteractivity(receiveAttack)
  }

  function receiveAttack() {
    player.gameboard.receiveAttack(row, column)
    el.classList.replace('bg-gray-100', 'bg-blue-200')
  }
  return { ...cell, receiveAttack }
}

const ShipCell = (player, column, row) => {
  const cell = GenericCell(column, row)
  const el = cell.get()

  if (player.isComputer) {
    cell.addInteractivity(receiveAttack)
  }

  function receiveAttack() {
    player.gameboard.receiveAttack(row, column)
    el.classList.replace('bg-gray-100', 'bg-red-300')

    const shipSlot = player.gameboard.slots[row][column]
    if (shipSlot.isSunk()) {
      outlineSunken()
    }
  }

  const outlineSunken = () => {
    const slots = player.gameboard.slots
    const ship = player.gameboard.slots[row][column]

    for (const slotRow of slots) {
      for (const slot of slotRow) {
        if (slot === ship) {
          console.log(slot, ship)
          el.classList.replace('outline-slate-500', 'outline-red-500')
          el.classList.add('z-10')
        }
      }
    }
  }

  return { ...cell, receiveAttack }
}

export { GenericCell, EmptyCell, ShipCell }
