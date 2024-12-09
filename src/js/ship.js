const Ship = (length) => {
  const type = 'ship'
  let hits = 0

  const hit = () => {
    hits++
  }

  const isSunk = () => {
    return hits >= length ? true : false
  }

  return { type, hit, isSunk }
}

export default Ship
