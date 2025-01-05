import Ship from './ship'

const RandomShipSlotN = ({ size: shipSize }) => {
  // TODO: Check for ships occupying the same slot
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
    number = Math.floor(Math.random() * boundLimit + 1)
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

  const populateCoordinates = (orientation) => {
    const axisN = RandomShipSlotN(ship).get()
    const headN = RandomShipSlotN(ship).get()

    for (let i = 0; i < ship.size; i++) {
      if (orientation === 'row') {
        coordinates.push([axisN, headN + i])
      } else if (orientation === 'column') {
        coordinates.push([headN + i, axisN])
      }
    }
  }

  const getRandomOrientation = () => {
    const randomBinaryValue = Math.floor(Math.random() * 2)
    console.log(randomBinaryValue)
    if (randomBinaryValue === 0) {
      return 'row'
    } else if (randomBinaryValue === 1) {
      return 'column'
    }
  }

  const get = () => {
    populateCoordinates(getRandomOrientation())
    return coordinates
  }

  return { get }
}

const RandomizeShips = (player, gridElement) => {
  let shipData = []
  const ships = [Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)]

  // TODO: shipData empty when passed to shipPaint
  const shipPaint = ShipPaint(shipData, gridElement)

  const clear = () => {
    shipPaint.clear()
    shipData = []
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
    for (const { coordinate } of shipData) {
      const cell = gridElement.querySelector(
        `[row=${coordinate[0]}][column${coordinate[1]}]`,
      )
      // console.log(cell)
      cell.classList.replace('bg-gray-100', 'bg-violet-200')
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
