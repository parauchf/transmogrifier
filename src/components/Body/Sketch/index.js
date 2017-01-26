import React, { Component, PropTypes } from 'react'
import _ from "underscore"

import SketchBase from './SketchBase'
import Overlay from './Overlay'
import styles from "./styles.scss"

const Sketch = (props) => (
    <div
    className="sketch-pane"
    style={{maxWidth: `${props.paneSplit}%`}}>
      <SketchBase {...props} />
      <Overlay {...props} />
    </div>
)

export default Sketch
