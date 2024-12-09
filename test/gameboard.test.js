import Gameboard from '../src/js/gameboard'
import Ship from '../src/js/ship'

describe('Blank board size and format', () => {
  let amount = 0
  const gameboard = Gameboard()

  test('10 rows in a board', () => {
    expect(gameboard.slot.length).toBe(10)
  })

  for (const row of gameboard.slot) {
    test('10 slots in a row', () => {
      expect(row.length).toBe(10)
    })

    for (const index of row) {
      amount++
      test('New boards have empty slots', () => {
        expect(index.type).toBe('empty')
      })
    }
  }

  test('100 slots in a board', () => {
    expect(amount).toBe(100)
  })
})

describe('Place ship at', () => {
  test('Ship placed at correct coordinate', () => {
    const gameboard = Gameboard()

    expect(gameboard.slot[0][2].type).toBe('empty')
    gameboard.placeShipAt(Ship(2), 0, 2)
    expect(gameboard.slot[0][2].type).toBe('ship')
  })
})

describe('Receive attack method', () => {
  test('Damages a ship', () => {
    const gameboard = Gameboard()
    const ship = Ship(3)
    gameboard.placeShipAt(ship, 2, 3)

    gameboard.receiveAttack(2, 3)
    gameboard.receiveAttack(2, 3)
    expect(ship.isSunk()).toBe(false)

    gameboard.receiveAttack(2, 3)
    expect(ship.isSunk()).toBe(true)
  })
})
