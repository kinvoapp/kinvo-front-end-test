import { Reducer } from 'redux'
import { LocalState, LocalTypes } from './types'

const INITIAL_STATE: LocalState = {
  data: {
    sucess: false,
    data: {
      snapshotByPortfolio: [],
      dailyEquityByPortfolioCharData: [],
      snapshotByProduct: []
    },
    error: ''
  }
}

const reducer: Reducer<LocalState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LocalTypes.TOGGLE_MY_FIX:
      return { ...state, data: action.payload }
    default:
      return state
  }
}

export default reducer
