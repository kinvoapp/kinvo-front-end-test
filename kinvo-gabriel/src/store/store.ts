import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import { DataResultState, ApiDataReducer } from './apiData'

export interface ReduxState {
  apiData: DataResultState
}

const rootReducer = combineReducers<ReduxState>({
  apiData: ApiDataReducer,
})

const middlewares = [
  reduxThunk,
  process.env.NODE_ENV !== 'production' && logger,
].filter(
  <Middleware>(middleware?: Middleware | false): middleware is Middleware =>
    Boolean(middleware)
)

export const createReduxStore = (preloadedState?: ReduxState) =>
  createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))

export const store = createReduxStore()
