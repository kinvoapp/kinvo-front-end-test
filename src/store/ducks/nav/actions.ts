/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ThunkAction } from 'redux-thunk'
import { Action, Dispatch } from 'redux'
import { NavTypes } from './types'
import { ApplicationState } from '../../index'

export type AppThunk = ThunkAction<void, ApplicationState, null, Action<string>>
export const changeLink = (num: number) => async (dispatch: Dispatch) => {
  dispatch({ type: NavTypes.TOGGLE_MY_NAV, payload: num })
}
