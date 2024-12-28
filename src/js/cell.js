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
          Computer().attack()
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

  const endGame = () => {
    document.body.innerHTML = ''

    const msg = document.createElement('div')
    document.body.append(msg)
    msg.classList.add('text-lg')

    if (player.isComputer) {
      msg.innerText = 'You win'
      msg.classList.add('text-green-400')
    } else {
      msg.innerText = 'You lose'
      msg.classList.add('text-red-400')
    }
  }

  function receiveAttack() {
    player.gameboard.receiveAttack(row, column)
    el.classList.replace('bg-gray-100', 'bg-red-300')

    const shipSlot = player.gameboard.slots[row][column]
    if (shipSlot.isSunk()) {
      outlineSunken(player.isComputer ? 1 : 2)
    }
    if (player.gameboard.isAllSunk()) {
      endGame()
    }
  }

  const outlineSunken = (gridN) => {
    const slots = player.gameboard.slots
    const ship = player.gameboard.slots[row][column]

    for (const [i, slotRow] of slots.entries()) {
      for (const [j, slot] of slotRow.entries()) {
        if (slot === ship) {
          const sunkenShip = document.querySelector(
            `[data-grid${gridN}] [row="${i}"][column="${j}"]`,
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
