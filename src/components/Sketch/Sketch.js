import React, { Component, PropTypes } from 'react'
import _ from "underscore"

import SketchBase from './SketchBase'
import Overlay from './Overlay'
import Resizer from './Resizer'
import MarkupViewer from './MarkupViewer'
import styles from "./styles.scss"

const Sketch = (props) => (
  <div className="sketch-body">
    <div className="sketch-pane">
      <SketchBase {...props} />
      <Overlay {...props} />
    </div>
    <Resizer {...props}/>
    <div className="sketch-pane">
      <MarkupViewer {...props} />
    </div>
  </div>
)

export default Sketch
