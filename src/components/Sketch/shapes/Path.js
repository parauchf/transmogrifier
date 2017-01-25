import React, { Component, PropTypes } from 'react'
import _ from "underscore"

import {
  unitVector,
  perpVector,
  addCoords,
  scale,
  magnitude
} from "../geoUtils"

import {
  focusStyle,
  annoStyle,
  annoTextStyle,
  pointStyle,
  regularStyle
} from "../paintStyles"

// using the cross-product method--this could be improved for concave shapes
// http://stackoverflow.com/questions/1165647
const findHandedness = (edges) => {
  return edges.map( ({from, to}) => from.x * to.y - from.y * to.x)
    .reduce( (sum, item) => (sum + item), 0) > 0 ? 1 : -1
}

export default class Path extends Component {

  constructor (props) {
		super(props)
    this.state = {
      dragId: null,
      offsetX: 0,
      offsetY: 0,
    }
	}

  componentWillDismount = () => {
    document.removeEventListener('mousemove', this.onDrag)
  }

  onDragStart = (v, e) => {
    const _this = this
    this.setState({
      dragId: v.id,
      offsetX: e.clientX - v.x,
      offsetY: e.clientY - v.y,
      x: v.x,
      y: v.y
    })
    document.addEventListener('mousemove', this.onDrag)
    document.addEventListener('mouseup', this.onDragEnd)
  }

  onDrag = (e) => {
    const {offsetX, offsetY} = this.state
    this.setState({
      x: e.clientX - offsetX,
      y: e.clientY - offsetY,
    })
  }

  onDragEnd = (e) => {
    const { moveVertex } = this.props
    const {x, y, dragId: id} = this.state
    document.removeEventListener('mousemove', this.onDrag)
    this.setState({dragId: null, offsetX: 0, offsetY: 0})
    moveVertex(id, {x, y})
  }

  render = () => {
    const _this = this
    const {dragId, x: sx, y: sy} = this.state
    const {id, vertices, selected, svgParams, styleProps} = this.props
    const {selectShape, moveVertex} = this.props
    const markers = []

    const d = vertices.map( (v, idx) => {
      const x = (v.id === dragId ? sx : v.x)
      const y = (v.id === dragId ? sy : v.y)

      /* annotations */

      markers.push(
        <circle {...pointStyle}
          key={idx} cx={x} cy={y} r={3}
          onMouseDown = {e => _this.onDragStart(v, e)}/>
      )

      /* actual line drawing */

      if (idx === 0)
        return `M${x} ${y}`

      else if (idx === vertices.length - 1 && v === vertices[0])
        return 'Z'

      else
        return `L${x} ${y}`

    }).join(' ')

    return (
      <svg {...svgParams } style={{overflow: "visible"}}>
        <path d={d} {... styleProps}
          {... (selected ? focusStyle : regularStyle)}
          onClick={e => {selectShape(id, 0, e.shiftKey); e.stopPropagation()}}/>
        {selected ? markers : null}
      </svg>
    )
  }

}

Path.propTypes = {
  id: PropTypes.string.isRequired,
  vertices: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.bool,
  svgParams: PropTypes.object.isRequired, // I should eliminate this
  styleProps: PropTypes.object.isRequired,
  moveVertex: PropTypes.func.isRequired,
  selectShape: PropTypes.func.isRequired
}
