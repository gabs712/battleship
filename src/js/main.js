import Grid from './grid'
import Player from './player'
import Ship from './ship'

const player1 = Player(false)
const player2 = Player(true)
const gridElement1 = document.querySelector('[data-grid1]')
const gridElement2 = document.querySelector('[data-grid2]')

const a = Ship(4)
const b = Ship()
const c = Ship()

player1.gameboard.placeShipAt(a, 0, 0)
player1.gameboard.placeShipAt(a, 1, 0)
player1.gameboard.placeShipAt(a, 2, 0)
player1.gameboard.placeShipAt(a, 3, 0)

const grid1 = Grid(gridElement1, player1)
const grid2 = Grid(gridElement2, player2)

grid1.setup()
grid2.setup()
