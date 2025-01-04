// Ships of size: 5, 4, 3, 3, 2

import Grid from './grid'
import Player from './player'
import Ship from './ship'

const gridElement1 = document.querySelector('[data-grid1]')
const gridElement2 = document.querySelector('[data-grid2]')

const player1 = Player(true)
const player2 = Player(false)

const grid1 = Grid(gridElement1, player1)
const grid2 = Grid(gridElement2, player2)

player1.enemy = player2
player2.enemy = player1

const shipGroup = () => {
  return {
    a: Ship(5),
    b: Ship(4),
    c: Ship(3),
    d: Ship(3),
    e: Ship(2),
  }
}

const ships1 = shipGroup()
const ships2 = shipGroup()

// player1.gameboard.placeShipAt(ships1.a, 0, 0)
// player1.gameboard.placeShipAt(ships1.a, 0, 0)
// player1.gameboard.placeShipAt(ships1.a, 0, 0)
// player1.gameboard.placeShipAt(ships1.a, 0, 0)
// player1.gameboard.placeShipAt(ships1.a, 0, 0)
//
// player1.gameboard.placeShipAt(ships1.b, 1, 0)
// player1.gameboard.placeShipAt(ships1.c, 2, 0)
// player1.gameboard.placeShipAt(ships1.d, 9, 0)
// player1.gameboard.placeShipAt(ships1.e, 9, 1)

player2.gameboard.placeShipAt(ships2.a, 1, 1)
player2.gameboard.placeShipAt(ships2.a, 1, 2)
player2.gameboard.placeShipAt(ships2.a, 1, 3)
player2.gameboard.placeShipAt(ships2.a, 1, 4)
player2.gameboard.placeShipAt(ships2.a, 1, 5)

player2.gameboard.placeShipAt(ships2.b, 5, 8)
player2.gameboard.placeShipAt(ships2.b, 6, 8)
player2.gameboard.placeShipAt(ships2.b, 7, 8)
player2.gameboard.placeShipAt(ships2.b, 8, 8)

player2.gameboard.placeShipAt(ships2.c, 7, 3)
player2.gameboard.placeShipAt(ships2.c, 7, 4)
player2.gameboard.placeShipAt(ships2.c, 7, 5)

player2.gameboard.placeShipAt(ships2.d, 3, 0)
player2.gameboard.placeShipAt(ships2.d, 4, 0)
player2.gameboard.placeShipAt(ships2.d, 5, 0)

player2.gameboard.placeShipAt(ships2.e, 4, 5)
player2.gameboard.placeShipAt(ships2.e, 4, 6)

grid1.setup()
grid2.setup()

grid1.start()
grid2.start()
