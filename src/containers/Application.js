import React, { Component, PropTypes } from 'react'
import Header from '../components/Header'
import Sketch from '../components/Sketch'

import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: 0, bottom: 0, left: 0, right: 0
}

class Application extends Component {
  constructor (props) {
		super(props)
		this.state = {
			loaded: false,
			isSidebarHidden: false
		}
	}

  render = () => {
    console.log(this)
    const { routes, store } = this.props

    return <Provider store={store}>
      <div style={style}>
        {/* <Router history={browserHistory} children={routes} /> */}
        <Header />
        <Sketch />
      </div>
    </Provider>
  }
}

export default Application
