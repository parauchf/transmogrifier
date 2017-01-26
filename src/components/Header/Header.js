import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'

import Tool from "./Tool"
import styles from "./header.scss"


const Header = (props) => {
  const {name, fillColor, strokeColor, strokeWidth, params} = props
  return (
    <div className="header">
        <div className="title-bar">
          <h1>{params.name}</h1>
        </div>
        <div className="toolbar">
          <Tool name="Colors">
            <div className="fill-sample"
              style={{
                background: fillColor,
                border: `${strokeWidth}px solid ${strokeColor}`
              }}/>
          </Tool>

        </div>
    </div>
  )
}

export default Header
