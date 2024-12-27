import Computer from './computer'

const GenericCell = (player, column, row) => {
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

        if (!player.gameboard.isAllSunk()) {
          Computer(player.enemy).attack()
        }
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
  const cell = GenericCell(player, column, row)
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
  const cell = GenericCell(player, column, row)
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
    if (player.gameboard.isAllSunk()) {
      // TODO: Inplement end game function
      alert('end')
    }
  }

  const outlineSunken = () => {
    const slots = player.gameboard.slots
    const ship = player.gameboard.slots[row][column]

    for (const [i, slotRow] of slots.entries()) {
      for (const [j, slot] of slotRow.entries()) {
        if (slot === ship) {
          const sunkenShip = document.querySelector(
            `[row="${i}"][column="${j}"]`,
          )
          sunkenShip.classList.replace('outline-slate-500', 'outline-red-500')
          sunkenShip.classList.add('z-10')
          console.log(sunkenShip)
        }
      }
    }
  }

  return { ...cell, receiveAttack }
}

export { GenericCell, EmptyCell, ShipCell }
