const Ship = (size) => {
  const type = 'ship'
  let hits = 0

  const hit = () => {
    hits++
  }

  const isSunk = () => {
    return hits >= size ? true : false
  }

  return { type, hit, isSunk, size }
}

export default Ship
