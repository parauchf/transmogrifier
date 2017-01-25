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

import { annoTextStyle } from "../paintStyles"


export default (props) => {
  const {edge, offset, lineStyle, svgParams} = props

  const from = addCoords(edge.from, offset)
  const to = addCoords(edge.to, offset)

  const u = unitVector(edge)
  const v = perpVector(edge)

  // reference lines
  const p1 = addCoords(from, scale(offset, -0.6))
  const p2 = addCoords(to, scale(offset, -0.6))

  // arrow points
  const p3 = addCoords(to, scale(u, -10), scale(v, 5))
  const p4 = addCoords(to, scale(u, -10), scale(v, -5))
  const p5 = addCoords(from, scale(u, 10), scale(v, 5))
  const p6 = addCoords(from, scale(u, 10), scale(v, -5))

  return <svg {...svgParams } style={{overflow: "visible"}}>
    <Line from={from} to={to} lineStyle={lineStyle}/>
    <Line from={p1} to={from} lineStyle={lineStyle}/>
    <Line from={p2} to={to} lineStyle={lineStyle}/>
    {/*
    <Line from={p3} to={to} lineStyle={lineStyle}/>
    <Line from={p4} to={to} lineStyle={lineStyle}/>
    <Line from={p5} to={from} lineStyle={lineStyle}/>
    <Line from={p6} to={from} lineStyle={lineStyle}/>
    */}
    <text {...annoTextStyle}
      x={(from.x + to.x)/2 -10}
      y={(from.y + to.y)/2}>{edge.value}</text>
  </svg>
}
