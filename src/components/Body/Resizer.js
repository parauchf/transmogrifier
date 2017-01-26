import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
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
    document.removeEventListener('mouseup', this.onDragEnd)
  }

  onDragStart = (e) => {
    this.setState({resizing: true, dragStart: e.clientX, offset: 0})
    document.addEventListener('mousemove', this.onDrag)
    document.addEventListener('mouseup', this.onDragEnd)
  }

  onDrag = (e) => {
    this.setState({offset: e.clientX - this.state.dragStart})
  }

  onDragEnd = (e) => {
    const {offset} = this.state
    const {paneSplit} = this.props
    const totalWidth = ReactDom.findDOMNode(this).parentNode.clientWidth
    const newSplit = paneSplit +  offset / totalWidth * 100

    this.props.setPaneSplit(newSplit)
    this.setState({resizing: false, dragStart: null})
    document.removeEventListener('mousemove', this.onDrag)
    document.removeEventListener('mouseup', this.onDragEnd)
  }

  render = () => {
      const {paneSplit} = this.props
      const {offset, resizing} = this.state
      const style = {
        left: `${paneSplit}%`,
      }
      return <div className="resizer" style={style}
        onMouseDown={this.onDragStart}>
        {
        resizing ?
        <div style={{left: offset}} className="resize-inidicator"/>
        : null
        }
      </div>
  }
}

Resizer.propTypes = {
  paneSplit: PropTypes.number,
  moveSplit: PropTypes.func
}

export default Resizer
