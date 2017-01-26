import React, { Component, PropTypes } from 'react'
import Path from '../shapes/Path'

const SketchBase = (props) => {
  const {shapeList, svgParams, selectShape, clearSelection} = props
  const elements = shapeList.map(
    s => <Path key={s.id} {...s} selected = {false} />
  )

  return (
    <div className="sketch-inner">
      <svg {...svgParams} style={{border:"1px solid gray"}}>
        {elements}
      </svg>
    </div>
  )
}

export default SketchBase
