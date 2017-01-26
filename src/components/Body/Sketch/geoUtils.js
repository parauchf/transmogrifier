export const unitVector = (edge) => {
  const dx = (edge.to.x - edge.from.x)
  const dy = (edge.to.y - edge.from.y)
  const mag = Math.sqrt(dx**2 + dy**2)
  return {x: dx/mag, y: dy/mag}
}

export const perpVector = (edge, scale=1) => {
  const {x, y} = unitVector(edge)
  return {x: y * scale, y: -1 * x * scale}
}

export function addCoords () {
  return ([...arguments]).reduce((item, total) => ({
    x: item.x + total.x,
    y: item.y + total.y
  }), {x: 0, y: 0})
}

export const scale = (v, s) => ({x: v.x*s, y: v.y*s})

export const magnitude = (v) => sqrt(v.x**2 + v.y**2)
