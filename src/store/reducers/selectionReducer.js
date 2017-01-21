import update from 'react/lib/update'

const initialState = {
  selected: {}
}

export default (state = initialState, action) => {
  const { selected } = state
  const { elementId, segment, shift} = action

  switch (action.type) {
    case 'TOGGLE_SELECT_SEGMENT':
      return Object.assign({}, {
        selected: shift ? Object.assign({}, state.selected, {
          [elementId]: !selected[elementId]
        }) : {
          [elementId]: true
        }
      })
      break;
    default:
      return state
  }
}
