import Grid from './grid'
import Player from './player'
import Ship from './ship'

const player1 = Player(true)
const player2 = Player(false)
const gridElement1 = document.querySelector('[data-grid1]')
const gridElement2 = document.querySelector('[data-grid2]')

const a = Ship(4)
const b = Ship(2)

const c = Ship(2)

player1.gameboard.placeShipAt(a, 0, 0)
player1.gameboard.placeShipAt(a, 1, 0)
player1.gameboard.placeShipAt(a, 2, 0)
player1.gameboard.placeShipAt(a, 3, 0)
player1.gameboard.placeShipAt(b, 9, 0)
player1.gameboard.placeShipAt(b, 9, 1)

player2.gameboard.placeShipAt(c, 0, 0)
player2.gameboard.placeShipAt(c, 0, 1)

const grid1 = Grid(gridElement1, player1)
const grid2 = Grid(gridElement2, player2)

grid1.populate()
grid2.populate()
