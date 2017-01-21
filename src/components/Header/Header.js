import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import { colors } from "../../constants"

console.log(colors)

const style = {
  flex: 0,
  background: "steelblue",
  padding: 0,
  margin: 0
}

const headerStyle = {
  color: "rgba(255,255,255,0.8)",
  fontSize: 20,
  fontFamily: 'Helvetica, San Serif',
  padding: 15,
  margin: 0
}

const Header = (props) => {
  const {name} = props
  return (
    <div style={style}>
        <h1 style={headerStyle}>{name}</h1>
    </div>
  )
}

export default Header
