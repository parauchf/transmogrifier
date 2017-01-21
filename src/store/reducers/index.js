import { combineReducers } from 'redux'
import ui from "./uiReducer"
import sketch from "./sketchReducer"
import params from './paramsReducer'

export default () => combineReducers({ui, sketch, params})
