/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ThunkAction } from 'redux-thunk'
import { Action, Dispatch } from 'redux'
import { LocalTypes } from './types'
import { ApplicationState } from '../../index'
import { getMyFixService } from './service'
import { NotifyTypes } from '../notify/types'

export type AppThunk = ThunkAction<void, ApplicationState, null, Action<string>>
export const getMyFix = () => async (dispatch: Dispatch) => {
  dispatch({ type: NotifyTypes.SET_LOADING, payload: true })
  try {
    const respData: any = await getMyFixService()
    if (respData.data.error) {
      throw new Error()
    }
    dispatch({
      type: LocalTypes.TOGGLE_MY_FIX,
      payload: respData.data
    })
  } catch (error) {
    dispatch({
      type: NotifyTypes.SET_MESSAGE,
      payload: {
        severity: 'error',
        active: true,
        errorType: error.response?.data.error.type,
        message: error.response?.data.error.message || 'opps'
      }
    })
  } finally {
    dispatch({ type: NotifyTypes.SET_LOADING, payload: false })
  }
}
