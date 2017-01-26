import { connect } from 'react-redux'
import { pure } from "recompose"
import _ from 'underscore'
import * as actions from './actions'

import Body from "./Body"

const mapStateToProps = (state, ownProps) => {
  const {
    selection,
    sketch: {
      vertices,
      shapes
    },
    ui: {
      paneSplit
    },
    params
  } = state

  return {
    paneSplit,
    svgParams:
      _.pick(params, 'width', 'height', 'version', 'xlmns', 'baseProfile'),
    shapeList: _.values(shapes).map(shape => Object.assign({}, shape,
      {
        vertices: shape.vertices.map((id) => vertices[id]),
        selected: !!(selection[shape.id]),
        styleProps: _.pick(shape, 'stroke', 'strokeWidth', 'fill')
      }
    ))
  }
}

const mapDispatchToProps = { ... actions }

const ConnectedBody = connect(
  mapStateToProps,
  mapDispatchToProps
)(Body)

export default ConnectedBody
