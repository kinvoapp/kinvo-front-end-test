import { Dispatch } from 'redux'
import { DataResult, updateApiDataAction } from './actions'

export const updateCurrentApiData = (dispatch: Dispatch) => (dataResult: DataResult) => {
  dispatch(updateApiDataAction(dataResult))
}
