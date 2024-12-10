import Grid from './grid'
import Player from './player'

const grid = Grid()
const player1 = Player(false)
const player2 = Player(true)

grid.setup(player1.gameboard.slots, player2.gameboard.slots)
