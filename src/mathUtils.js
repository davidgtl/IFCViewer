const TAU = 2 * Math.PI
const TAU2 = Math.PI
const TAU4 = 0.5 * Math.PI

const clampCircular = (value, valueMin, valueMax) => {
  const cycle = valueMax - valueMin
  while (value < valueMin)
    value += cycle
  while (value > valueMax)
    value -= cycle
  return value
}

export { clampCircular, TAU, TAU2, TAU4 }