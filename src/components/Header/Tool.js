import React, { Component, PropTypes } from 'react'

const Tool = (props) => {
  const {name, children} = props
  return (
    <span className="tool">
      <label className="tool-label">{name}</label>
      <div className="tool-content">
        {children}
      </div>
    </span>
  )
}

export default Tool
