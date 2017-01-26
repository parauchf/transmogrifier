import React, { Component, PropTypes } from 'react'

export default (props) => {
  return  <defs>
    <pattern id="dots-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
      <line x1="-1" x2="9" y1="-1" y2="9" strokeWidth="1" stroke="blue"/>
    </pattern>
  </defs>
}
