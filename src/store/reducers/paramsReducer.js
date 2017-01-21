import update from 'react/lib/update'
import _ from "underscore"

export const DEFAULT_WIDTH = 1000
export const DEFAULT_HEIGHT = 1000
export const DEFAULT_VERSION = "1.2"
export const DEFAULT_BASE_PROFILE = "full"
export const DEFAULT_XLMNS = "http://www.w3.org/2000/svg"
export const DEFAULT_VIEW_BOX = "0 0 1000 1000"

const initialState = {
  name: 'New sketch',
  version: DEFAULT_VERSION,
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
  baseProfile: DEFAULT_BASE_PROFILE,
  xmlns: DEFAULT_XLMNS,
  viewBox: DEFAULT_VIEW_BOX
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PUT_SHAPE':
      return Object.assign({}, state, {hideSidebar: !state.hideSidebar})
      break;
    case 'DELETE_SHAPE':
      return _.omit(state, action.shapeId)
      break;
    default:
      return state
  }
}
