const convertVerticesToSpec = (vertices) => {
  return vertices.map((v, idx) => {
    const {x,y} = v

    if (idx === 0)
      return `M${x} ${y}`

    else if (idx === vertices.length - 1 && v === vertices[0])
      return 'Z'

    else if (idx > 0 && y === vertices[idx - 1].y)
      return `H${x}`

    else if (idx > 0 && x === vertices[idx - 1].x)
      return `V${y}`

    else
      return `L${x} ${y}`
  })

}


export default convertVerticesToSpec
