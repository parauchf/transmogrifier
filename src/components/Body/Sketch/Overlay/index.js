import React, { Component, PropTypes } from 'react'
import _ from "underscore"

import Path from '../shapes/Path'
import Defs from './Defs'
import Dimension from '../shapes/Dimension'
import AngleDimension from "../shapes/AngleDimension"
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

class Overlay extends Component {

  render = () => {
    const props = this.props
    const {clearSelection, selectShape, svgParams,
      moveVertex, shapeList} = props
    const elements = shapeList.map(s =>
      <Path key={s.id} {...props} {...s} />
    )

    return (
      <div className="sketch-inner sketch-overlay">
        <svg {... svgParams} onClick = {e => clearSelection()}
          style={{overflow: "visible"}}>
          <Defs/>
          {elements}
        </svg>
      </div>
    )
  }
}

export default Overlay
