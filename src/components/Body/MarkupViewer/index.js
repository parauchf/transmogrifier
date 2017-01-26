import React, { Component, PropTypes } from 'react'
import _ from "underscore"

import MarkupElement from './MarkupElement'
import styles from "./styles.scss"

const MarkupViewer = (props) => {
  const {shapeList, svgParams} = props
  const {clearSelection, selectShape} = props
  const elements = shapeList.map(
    s => <MarkupElement {...props} {...s} key={s.id}/>
  )

  return (
    <div className="sketch-pane"
    style={{maxWidth: `${100 - props.paneSplit}%`}}>
      <div className="markup-viewer">
        <div className="markup-element">
          {`<svg>`}
        </div>
        {elements}
        <div className="markup-element">
          {`</svg>`}
        </div>
      </div>
    </div>
  )
}

export default MarkupViewer
