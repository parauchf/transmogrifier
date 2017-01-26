import React, { Component, PropTypes } from 'react'
import _ from "underscore"
import convertVerticesToSpec from "./convertVerticesToSpec"
import {
  unitVector,
  perpVector,
  addCoords,
  scale,
  magnitude
} from "../../geoUtils"

import {
  focusStyle,
  annoStyle,
  annoTextStyle,
  pointStyle,
  regularStyle
} from "../../paintStyles"



// using the cross-product method--this could be improved for concave shapes
// http://stackoverflow.com/questions/1165647
const findHandedness = (edges) => {
  return edges.map( ({from, to}) => from.x * to.y - from.y * to.x)
    .reduce( (sum, item) => (sum + item), 0) > 0 ? 1 : -1
}


// https://en.wikipedia.org/wiki/Centroid#Centroid_of_polygon
// http://stackoverflow.com/questions/9692448
const centroid = (pts) => {
   var first = pts[0], last = pts[pts.length-1];
   if (first.x != last.x || first.y != last.y) pts.push(first);
   var twicearea=0,
   x=0, y=0,
   nPts = pts.length,
   p1, p2, f;
   for ( var i=0, j=nPts-1 ; i<nPts ; j=i++ ) {
      p1 = pts[i]; p2 = pts[j];
      f = p1.x*p2.y - p2.x*p1.y;
      twicearea += f;
      x += ( p1.x + p2.x ) * f;
      y += ( p1.y + p2.y ) * f;
   }
   f = twicearea * 3;
   return { x:x/f, y:y/f };
}

export default class Path extends Component {

  constructor (props) {
		super(props)
    this.state = {
      dragging: false,
      dragId: null,
      offsetX: 0,
      offsetY: 0,
    }
	}

  componentWillDismount = () => {
    document.removeEventListener('mousemove', this.onDrag)
    document.removeEventListener('mouseup', this.onDragEnd)
  }

  onShapeDragStart = (e) => {
    this.setState({
      dragging: true,
      offsetX: e.clientX,
      offsetY: e.clientY,
    })
    document.addEventListener('mousemove', this.onDrag)
    document.addEventListener('mouseup', this.onShapeDragEnd)
  }

  onShapeDragEnd = (e) => {
    document.removeEventListener('mousemove', this.onDrag)
    document.removeEventListener('mouseup', this.onShapeDragEnd)
  }

  onVertexDragStart = (v, e) => {
    this.setState({
      dragId: v.id,
      offsetX: e.clientX - v.x,
      offsetY: e.clientY - v.y,
      x: v.x,
      y: v.y
    })
    document.addEventListener('mousemove', this.onDrag)
    document.addEventListener('mouseup', this.onVertexDragEnd)
  }

  onDrag = (e) => {
    const {offsetX, offsetY} = this.state
    this.setState({
      x: e.clientX - offsetX,
      y: e.clientY - offsetY,
    })
  }

  onVertexDragEnd = (e) => {
    const { moveVertex } = this.props
    const {x, y, dragId: id} = this.state
    document.removeEventListener('mousemove', this.onDrag)
    document.removeEventListener('mouseup', this.onVertexDragEnd)
    this.setState({dragId: null, offsetX: 0, offsetY: 0})
    moveVertex(id, {x, y})
  }

  render = () => {
    const _this = this
    const {dragging, dragId, x: sx, y: sy} = this.state
    const {id, vertices, selected, svgParams, styleProps} = this.props
    const {selectShape, moveVertex} = this.props
    const markers = []
    const classes = "sketch-shape " + (selected ? "sketch-shape--selected" : "")

    const adjustedVertices = vertices.map( ({x, y, id}, idx) => ({
      id,
      x: (dragging ? (sx + x) : (id === dragId) ? sx : x),
      y: (dragging ? (sy + y) : (id === dragId) ? sy : y)
    }))

    const d = convertVerticesToSpec(adjustedVertices).join(' ')

    const c = centroid(vertices)
    const w = id.length * 10 + 10

    adjustedVertices.forEach(v => markers.push(
        <circle {...pointStyle}
          key={v.id} cx={v.x} cy={v.y} r={3}
          onMouseDown = {e => _this.onVertexDragStart(v, e)}/>
      ))
    markers.push(
      <rect x={c.x - w/2} y={c.y - 15} width={w} height = "20" fill="blue"/>
    )
    markers.push(
      <text fill="white" {...c} textAnchor="middle">
        {id}
      </text>
    )



    return (
      <svg {...svgParams } style={{overflow: "visible"}}>
        <path d={d} {... styleProps}
          className={classes}
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
  svgParams: PropTypes.object, // I should eliminate this
  styleProps: PropTypes.object.isRequired,
  moveVertex: PropTypes.func,
  selectShape: PropTypes.func
}
