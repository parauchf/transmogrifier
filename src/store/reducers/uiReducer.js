import update from 'react/lib/update'

const initialState = {
  paneSplit: 50
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_SPLIT':
      return Object.assign({}, state, {paneSplit: action.split})
      break;
    default:
      return state
  }
}
