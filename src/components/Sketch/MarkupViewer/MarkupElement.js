import React, { Component, PropTypes } from 'react'
import _ from "underscore"

import styles from "./styles.scss"

const Attribute = (props) => {
  return <span>
    <span> {props.attrName}="</span>
    <span className="changable">{props.value}</span>
    <span>" </span>
  </span>
}

const MarkupElement = (props) => {
  const {id, element, vertices, selected, svgParams, styleProps} = props
  const {selectShape, moveVertex} = props

  return <div className={`markup-element ${
    selected ? 'markup-element--selected' : ''}`}
    onClick={e => {selectShape(id, 0, e.shiftKey); e.stopPropagation()}}>
    {'<'}
      <span className="changable">{element}</span>
      <Attribute attrName="id" value={props.id}/>
      <Attribute attrName="d" value="..."/>
  </div>
}

export default MarkupElement
