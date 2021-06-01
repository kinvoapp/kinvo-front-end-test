import { Reducer } from 'redux'
import { NotifyState, NotifyTypes } from './types'

const INITIAL_STATE: NotifyState = {
  message: {
    severity: 'info',
    active: false,
    errorType: '',
    message: ''
  },

  loading: false
}

const reducer: Reducer<NotifyState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotifyTypes.SET_MESSAGE:
      return { ...state, message: action.payload }
    case NotifyTypes.SET_LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

export default reducer
