import update from 'react/lib/update'

const testPath = {
  id: "testPath",
  classes: [],
  fill: 'steelblue',
  stroke: 'purple',
  strokWidth: '3',
  element: 'path',
  segments: [
    {x: 200, y: 200, type: 'move'},
    {x: 300, y: 100, type: 'line'},
    {x: 200, y: 300, type: 'line'},
    {x:0, y:0, type: 'close'}
  ]
}

const initialState = {
  shapes: {"testPath": testPath},
  counter: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SHAPE':
      const shape = action.shape
      return Object.assign({
        shapes: Object.assign({}, state.shapes, newShape)
      })
      break;
    default:
      return state
  }
}
