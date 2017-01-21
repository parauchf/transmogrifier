import React from 'react'
import './IndexView.scss'

const style = {
  display: 'flex',
  flex: 0,
  height: 50,
  background: 'steelblue'
}

export const IndexView = () => {
  return (
    <div style={style}>
      {name}
    </div>
  )
}

export default IndexView
