import { connect } from 'react-redux'
import _ from 'underscore'

import Sketch from './Sketch'

const mapStateToProps = (state, ownProps) => ({
    sketch: state.sketch
  })

const ConnectedSketch = connect(
  mapStateToProps,
  null
)(Sketch)

export default ConnectedSketch
