import Grid from './grid'
import Player from './player'

const player1 = Player(false)
const player2 = Player(true)
const gridElement1 = document.querySelector('[data-grid1]')
const gridElement2 = document.querySelector('[data-grid2]')

const grid1 = Grid(gridElement1, player1)
const grid2 = Grid(gridElement2, player2)

grid1.setup()
grid2.setup()
