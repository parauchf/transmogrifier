import React, { Component, PropTypes } from 'react'

export default (props) => {
  const {from, to, lineStyle} = props
  return  <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} {...lineStyle}/>
}
