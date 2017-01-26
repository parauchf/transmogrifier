import React, { Component, PropTypes } from 'react'
import Header from '../components/Header'
import Body from '../components/Body'

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
	}

  render = () => {
    const { routes, store } = this.props

    return <Provider store={store}>
      <div style={style}>
        {/* <Router history={browserHistory} children={routes} /> */}
        <Header />
        <Body />
      </div>
    </Provider>
  }
}

export default Application
