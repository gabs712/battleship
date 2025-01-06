import Grid from './grid'
import Player from './player'
import { RandomizeShips } from './randomize'

const gridElement1 = document.querySelector('[data-grid1]')
const gridElement2 = document.querySelector('[data-grid2]')

const player1 = Player(true)
const player2 = Player(false)

player1.enemy = player2
player2.enemy = player1

const grid1 = Grid(gridElement1, player1)
const grid2 = Grid(gridElement2, player2)

grid1.setup()
grid2.setup()

const randomShips1 = RandomizeShips(player1, gridElement1)
const randomShips2 = RandomizeShips(player2, gridElement2)

randomShips2.preview()
const randomizeButtom = document.querySelector('[data-randomize-buttom]')
randomizeButtom.addEventListener('click', () => {
  randomShips2.preview()
})

const startButtom = document.querySelector('[data-start-button]')
startButtom.addEventListener('click', () => {
  randomShips2.place()

  randomShips1.generateData()
  randomShips1.place()

  grid1.start()
  grid2.start()

  randomizeButtom.remove()
  startButtom.remove()
})
