import { connect } from 'react-redux'
import { pure } from "recompose"
import _ from 'underscore'
import { selectShape } from './actions'

import Overlay from './Overlay'

const mapStateToProps = (state, ownProps) => {
  const { selection, sketch } = state

  return _.pick(sketch, _.keys(selection))
}

const mapDispatchToProps = {selectShape}

const ConnectedSketch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overlay)

export default ConnectedSketch
