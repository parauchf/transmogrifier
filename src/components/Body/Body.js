import React, { Component, PropTypes } from 'react'

import Sketch from './Sketch'
import Resizer from './Resizer'
import MarkupViewer from './MarkupViewer'

const Body = (props) => (
  <div className="sketch-body">
    <Sketch {...props}/>
    <Resizer {...props}/>
    <MarkupViewer {...props} />
  </div>
)

export default Body
