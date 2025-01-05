// Ships of size: 5, 4, 3, 3, 2

import Grid from './grid'
import Player from './player'
import { RandomizeShips } from './randomize'
import Ship from './ship'

const gridElement1 = document.querySelector('[data-grid1]')
const gridElement2 = document.querySelector('[data-grid2]')

const player1 = Player(true)
const player2 = Player(false)

const grid1 = Grid(gridElement1, player1)
const grid2 = Grid(gridElement2, player2)

player1.enemy = player2
player2.enemy = player1

// player1.gameboard.placeShipAt(ships1.a, 0, 0)

grid1.setup()
grid2.setup()

RandomizeShips(player1, gridElement1).preview()

// grid1.start()
// grid2.start()
