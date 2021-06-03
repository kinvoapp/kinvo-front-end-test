import { Reducer } from 'redux'
import { NavState, NavTypes } from './types'

const INITIAL_STATE: NavState = {
  active: -1
}

const reducer: Reducer<NavState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NavTypes.TOGGLE_MY_NAV:
      return { ...state, active: action.payload }
    default:
      return state
  }
}

export default reducer
