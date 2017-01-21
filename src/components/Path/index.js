import React, { Component, PropTypes } from 'react'
import _ from "underscore"

const round = (x) => (_.isNumber(x) ? (Math.floor(x * 10)/10) : null)

export default (props) => {
  const shapeProps = _.pick(props, 'strokeWidth', 'stroke', 'fill')
  const segments = props.segments.map( (seg, idx) => {
    const x = round(seg.x)
    const y = round(seg.y)

    switch (seg.type) {
      case 'move':
        return `M ${x} ${y}`
      case 'close':
        return 'Z'
      case 'line':
        // if (x === null) return `V${round(y)}`
        // if (y === null) return `H${round(x)}`
        return `L${round(x)} ${round(y)}`
    }
  }).join(' ')

  return <path {...shapeProps} d={segments}/>
}
