import update from 'react/lib/update'

const initialState = {
  hideSidebar: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return Object.assign({}, state, {hideSidebar: !state.hideSidebar})
      break;
    default:
      return state
  }
}
