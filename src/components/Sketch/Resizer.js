import React, { Component, PropTypes } from 'react'
import _ from "underscore"

class Resizer extends Component {
  constructor (props) {
		super(props)
    this.state = {
      offset: 0,
      dragStart: null,
      resizing: false
    }
	}

  componentWillDismount = () => {
    document.removeEventListener('mousemove', this.onDrag)
  }

  onMouseDown = (e) => {
    this.setState({resizing: true, dragStart: e.clientX})
    document.addEventListener('mousemove', this.onDrag)
    document.addEventListener('mouseup', this.onMouseUp)
  }

  onDrag = (e) => {
    this.setState({offset: e.clientX - this.state.dragStart})
  }

  onMouseUp = (e) => {
    document.removeEventListener('mousemove', this.onDrag)
    this.props.setPaneSplit(40)
    this.setState({resizing: false, dragStart: null})
  }

  render = () => {
      const {paneSplit} = this.props
      const style = {
        left: `${paneSplit}%`
      }
      return <div className="resizer" style={style}>
      </div>
  }
}

Resizer.propTypes = {
  paneSplit: PropTypes.number,
  moveSplit: PropTypes.func
}

export default Resizer
