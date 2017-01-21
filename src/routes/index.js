import IndexView from './IndexView'
import Application from '../containers/Application'

export const createRoutes = (store) => ({
  path        : '/',
  component   : Application,
  indexRoute  : IndexView,
  childRoutes : [

  ]
})

export default createRoutes
