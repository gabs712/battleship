import Ship from '../src/js/ship'

describe('Ship is sunk after enough hits', () => {
  test('Length 3 sunk after 3 hits', () => {
    const ship3 = Ship(3)
    ship3.hit()
    ship3.hit()
    ship3.hit()

    expect(ship3.isSunk()).toBe(true)
  })

  test('Length 1 not sunk after 0 hits', () => {
    const ship1 = Ship(1)
    expect(ship1.isSunk()).toBe(false)
  })
})
