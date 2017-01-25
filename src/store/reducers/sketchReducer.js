import update from 'react/lib/update'
import _ from 'underscore'


const testPath = {
  id: "testPath",
  classes: [],
  fill: 'violet',
  stroke: 'transparent',
  strokeWidth: '3',
  element: 'path',
  vertices: ['A', 'B', 'C', 'D', 'E', 'A']
}

const vertices = {
  A: {id: 'A', x: 0, y: 0, type: 'vertex', shape: "testPath"},
  B: {id: 'B', x: 0, y: 300, type: 'vertex', shape: "testPath"},
  C: {id: 'C', x: 120, y: 240, type: 'vertex', shape: "testPath"},
  D: {id: 'D', x: 240, y: 120, type: 'vertex', shape: "testPath"},
  E: {id: 'E', x: 300, y: 0, type: 'vertex', shape: "testPath"},
  X: {id: 'X', x: 60, y: 60, type: 'vertex', shape: "testPath"},
}

const constraints = {
  1: {id: 1, from: "a", to: "b", vertex: "B", type: "angle", value: 60},
  2: {id: 2, from: "d", to: "e", vertex: "E", type: "angle", value: 60},
  3: {id: 3, from: "B", to: "C", type: "length", value: 40},
  4: {id: 4, from: "D", to: "E", type: "length", value: 40}
}

const initialState = {
  shapes: {"testPath": testPath},
  vertices,
  constraints,
  counter: 7
}

export default (state = initialState, {type, shape, vertex}) => {
  switch (type) {
    case 'UPDATE_VERTEX':
      return Object.assign({}, state, {
        vertices: Object.assign({}, state.vertices, {
          [vertex.id]: Object.assign({},
            state.vertices[vertex.id] || {},
            vertex
          )
        })
      })
      break;
    case 'SET_SHAPE':
      return Object.assign({}, state, {
        shapes: Object.assign({}, state.shapes, {[shape.properties.id]: shape})
      })
      break;
    default:
      return state
  }
}
