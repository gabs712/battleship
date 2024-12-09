const Ship = (length) => {
  let hits = 0

  const hit = () => {
    hits++
  }

  const isSunk = () => {
    return hits >= length ? true : false
  }

  return { hit, isSunk }
}

export default Ship
