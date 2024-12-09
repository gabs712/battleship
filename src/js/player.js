import Gameboard from './gameboard'

const Player = (isComputer) => {
  const gameboard = Gameboard()

  return { isComputer, gameboard }
}

export default Player
