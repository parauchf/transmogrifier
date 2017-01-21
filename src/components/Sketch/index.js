import { connect } from 'react-redux'
import _ from 'underscore'

import Sketch from './Sketch'

const mapStateToProps = (state, ownProps) => ({
    params: state.params,
    sketch: state.sketch
  })

const ConnectedSketch = connect(
  mapStateToProps,
  null
)(Sketch)

export default ConnectedSketch
