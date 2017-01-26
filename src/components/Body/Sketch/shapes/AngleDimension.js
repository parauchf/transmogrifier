import React, { Component, PropTypes } from 'react'
import _ from "underscore"
import {
  unitVector,
  perpVector,
  addCoords,
  scale,
  magnitude
} from "../geoUtils"
import Line from "./Line"

import { annoTextStyle, annoStye } from "../paintStyles"

export default (props) => {
  const {from, to, vertex, value, svgParams, lineStyle} = props
  const u = scale(unitVector(from), (from.to === vertex ? -1 : 1))
  const v = scale(unitVector(to), (to.to === vertex ? -1 : 1))
  const r = 60

  // reference lines
  const p1 = addCoords(vertex, scale(u, r))
  const p2 = addCoords(vertex, scale(v, r))

  // text position
  const p3 = addCoords(vertex, scale(u, r), scale(v, r))

  // arrow points
  // const p3 = addCoords(to, scale(u, -10), scale(v, 5))
  // const p4 = addCoords(to, scale(u, -10), scale(v, -5))
  // const p5 = addCoords(from, scale(u, 10), scale(v, 5))
  // const p6 = addCoords(from, scale(u, 10), scale(v, -5))

  return <svg {...svgParams } style={{overflow: "visible"}}>

    <path d={`M${vertex.x} ${vertex.y} L${p1.x} ${p1.y}
      A${r} ${r} 0 0 1 ${p2.x} ${p2.y} Z`} {...lineStyle}/>
    <text {...annoTextStyle} x={p3.x} y={p3.y}>{value} deg</text>

  </svg>
}
