const Computer = () => {
  const grid = document.querySelector(`[data-grid2]`)

  const attack = () => {
    const el = grid.querySelector(`[row="0"][column="9"]`)
    el.obj.receiveAttack()
  }
  return { attack }
}

export default Computer
