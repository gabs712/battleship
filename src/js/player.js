import Gameboard from './gameboard'

const Player = (isComputer, enemy) => {
  const gameboard = Gameboard()

  return { isComputer, enemy, gameboard }
}

export default Player
