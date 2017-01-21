import { connect } from 'react-redux'
import _ from 'underscore'

import Header from './Header'

const mapStateToProps = (state, ownProps) => (state.params)

const ConnectedHeader = connect(
  mapStateToProps,
  null
)(Header)

export default ConnectedHeader
