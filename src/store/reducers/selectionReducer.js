import update from 'react/lib/update'

const initialState = {}

export default (state = initialState, action) => {
  const { shapeId, segment, shift} = action

  switch (action.type) {
    case 'CLEAR_SELECTION':
      return {}

    case 'SELECT_SHAPE':
      // if shift is held and the shape is already selected, then deselct it
      return (shift && shapeId in state) ? _.omit(state, shapeId) :
      // otherwise if shift is held, add it to the selection
        (shift) ? Object.assign({}, state, {[shapeId]: true}) :
      // if shift is not held, select only the target shape
        {[shapeId]: true}

    default:
      return state
  }
}
