import React, { Component, PropTypes } from 'react'
import { colors } from "../../constants"
import _ from "underscore"

import Path from '../Path'

const style = {
  flex: 1
}

const hiliteStyle = {
  strokeWidth: 5,
  stroke: 'lightsalmon'
}

class Overlay extends Component {

  render () {
    const {sketch: {shapes}} = this.props
    const svgParams = _.pick(params, 'width', 'height', 'version',
      'xlmns', 'viewBox', 'baseProfile')
    const elements = _.values(shapes).map(s => <Path key={s.id} {...s}/>)

    return (
      <div style={style}>
        <svg {... svgParams}>
          {elements}
        </svg>
      </div>
    )
  }

}

export default Sketch
