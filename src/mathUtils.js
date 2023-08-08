const TAU = 2 * Math.PI
const TAU2 = Math.PI
const TAU4 = 0.5 * Math.PI

/**
  Wrap x around when outside [xmin, xmax]
  a.k.a x mod [xmin, xmax]
*/
const clampCircular = (x, xmin, xmax) => {
  const cycle = xmax - xmin
  //TODO: replace with division for large values
  while (x < xmin)
    x += cycle
  while (x > xmax)
    x -= cycle
  return x
}

/**
  if x outside [xmin, xmax] 
    set it xmin or xmax
*/
function clamp(x, xmin, xmax) {
  return Math.min(Math.max(x, xmin), xmax)
}

/**
  Discretize x to one of
  {..., offset - stepSize, offset, offset + stepSize, offset + 2 * stepSize, ... }
*/
function floorStep(x, offset, stepSize) {
  return Math.floor((x - offset) / stepSize) * stepSize + offset
}

/**
  Unbounded linear interpolation between
  t = 0 => from
  t = 1 => to
*/
function lerp(t, from, to) {
  return from + t * (to - from)
}

export { TAU, TAU2, TAU4, clampCircular, clamp, floorStep, lerp }