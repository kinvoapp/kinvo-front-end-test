import { createStore } from 'redux'
import reducers from './reducers'
import middlewares from './middlewares'

export default createStore(reducers, middlewares)