/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, Store, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './ducks'
import { LocalState } from './ducks/local/types'

export interface ApplicationState {
  local: LocalState
}

const persistConfig = {
  key: 'data',
  storage,
  whitelist: ['local']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store: Store<ApplicationState | any> = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export const persistor = persistStore(store)
