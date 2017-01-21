import { combineReducers } from 'redux'
import ui from "./uiReducer"
import sketch from "./sketchReducer"
import params from './paramsReducer'
import selection from "./selectionReducer"

export default () => combineReducers({ui, sketch, params, selection})
