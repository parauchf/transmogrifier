import { connect } from 'react-redux'
import _ from 'underscore'

import Header from './Header'

/*
 *  reducer function--if all values are the same, return the value
 *  otherwise return the string "multiple"
 */

const summary = (agg, color) => (
  color !== agg && agg ? 'multiple' : color
)

const mapStateToProps = ({params, sketch, selection}) => {
  const selectedShapes = Object.keys(selection).map(id => sketch.shapes[id])
  return {
    params,
    fillColor: selectedShapes
      .map(shape => shape.fill)
      .reduce(summary, null),
    strokeColor: selectedShapes
      .map(shape => shape.strokeColor)
      .reduce(summary, null),
    strokeWidth: selectedShapes
      .map(shape => shape.strokeWidth)
      .reduce(summary, null)
  }
}

const ConnectedHeader = connect(
  mapStateToProps,
  null
)(Header)

export default ConnectedHeader
