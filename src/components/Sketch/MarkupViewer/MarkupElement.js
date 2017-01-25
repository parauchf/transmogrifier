import React, { Component, PropTypes } from 'react'
import _ from "underscore"

import styles from "./styles.scss"

const MarkupElement = (props) => {
  const {id, element, vertices, selected, svgParams, styleProps} = props
  const {selectShape, moveVertex} = props

  return <div className={`markup-element ${
    selected ? 'markup-element--selected' : ''}`}
    onClick={e => {selectShape(id, 0, e.shiftKey); e.stopPropagation()}}>
    {`<${element} id="${id}" d="..."/>`}
  </div>
}

export default MarkupElement
