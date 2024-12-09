import Gameboard from '../src/js/gameboard'
import Ship from '../src/js/ship'

describe('Blank board size and format', () => {
  let amount = 0
  const gameboard = Gameboard()

  test('10 rows in a board', () => {
    expect(gameboard.slots.length).toBe(10)
  })

  for (const row of gameboard.slots) {
    test('10 slots in a row', () => {
      expect(row.length).toBe(10)
    })

    for (const index of row) {
      amount++
      test('New boards have blank slots', () => {
        expect(index).toBe(null)
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

    gameboard.placeShipAt(Ship(2), 0, 2)
    expect(gameboard.slots[0][2]).not.toBe(null)
  })
})

describe('Receive attack', () => {})
