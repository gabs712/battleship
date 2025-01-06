import Ship from './ship'

const shipData = []
const RandomShipSlotN = ({ size: shipSize }) => {
  let number
  const boundLimit = 9

  const shipIsWhithinBounds = () => {
    if (number + shipSize > boundLimit) return false

    return true
  }

  const isValidN = () => {
    if (shipIsWhithinBounds()) return true

    return false
  }

  const randomizeUntilBound = () => {
    number = Math.floor(Math.random() * (boundLimit + 1))
  }

  const get = () => {
    do {
      randomizeUntilBound()
    } while (!isValidN())

    return number
  }

  return { get }
}

const ShipCoordinates = (ship) => {
  const coordinates = []

  const getAlignedCoordinates = (axisN, headN) => {
    const alignedCoordinates = []
    const orientation = getRandomOrientation()

    for (let i = 0; i < ship.size; i++) {
      if (orientation === 'row') {
        alignedCoordinates.push([axisN, headN + i])
      } else if (orientation === 'column') {
        alignedCoordinates.push([headN + i, axisN])
      }
    }
    return alignedCoordinates
  }

  const isSameAsShip = ([currentX, currentY], [shipX, shipY]) => {
    if (currentX === shipX && currentY === shipY) {
      return true
    }
    return false
  }

  const isAdjascentToShip = ([currentX, currentY], [shipX, shipY]) => {
    if (
      (currentX - 1 === shipX && currentY === shipY) ||
      (currentX + 1 === shipX && currentY === shipY) ||
      (currentX === shipX && currentY - 1 === shipY) ||
      (currentX === shipX && currentY + 1 === shipY)
    ) {
      return true
    }
    return false
  }

  const isInvalidPosition = (currentCoordinates) => {
    for (const ship of shipData) {
      for (const shipCoordinate of ship.coordinate) {
        for (const currentCoordinate of currentCoordinates) {
          if (isSameAsShip(currentCoordinate, shipCoordinate)) {
            return true
          }
          if (isAdjascentToShip(currentCoordinate, shipCoordinate)) {
            return true
          }
        }
      }
    }
    return false
  }

  const populateCoordinates = () => {
    const axisN = RandomShipSlotN(ship).get()
    const headN = RandomShipSlotN(ship).get()
    const alignedCoordinates = getAlignedCoordinates(axisN, headN)

    if (isInvalidPosition(alignedCoordinates)) {
      populateCoordinates()
    } else {
      coordinates.push(...alignedCoordinates)
    }
  }

  const getRandomOrientation = () => {
    const randomBinaryValue = Math.floor(Math.random() * 2)
    if (randomBinaryValue === 0) {
      return 'row'
    } else if (randomBinaryValue === 1) {
      return 'column'
    }
  }

  const get = () => {
    populateCoordinates()
    return coordinates
  }

  return { get }
}

const RandomizeShips = (player, gridElement) => {
  const ships = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)]

  const shipPaint = ShipPaint(shipData, gridElement)

  const clear = () => {
    shipPaint.clear()
    shipData.splice(0, shipData.length)
  }

  const generateData = () => {
    for (const ship of ships) {
      const data = {
        ship,
        coordinate: ShipCoordinates(ship).get(),
      }
      shipData.push(data)
    }
  }

  const preview = () => {
    clear()
    generateData()
    shipPaint.paint()
  }

  const place = () => {
    return
  }
  return { preview, place }
}

const ShipPaint = (shipData, gridElement) => {
  const paint = () => {
    for (const ship of shipData) {
      for (const coordinate of ship.coordinate) {
        const cell = gridElement.querySelector(
          `[row="${coordinate[0]}"][column="${coordinate[1]}"]`,
        )
        cell.classList.replace('bg-gray-100', 'bg-violet-200')
      }
    }
  }

  const clear = () => {
    const cells = gridElement.children
    for (const cell of cells) {
      cell.classList.replace('bg-violet-200', 'bg-gray-100')
    }
  }

  return { paint, clear }
}

export { RandomizeShips }
