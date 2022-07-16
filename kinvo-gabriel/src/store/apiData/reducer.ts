import * as rawOperations from './operations'
import { createReducer } from '@reduxjs/toolkit'
import { DataResult, updateApiDataAction } from './actions'
import { createUseStore } from '../../utils/createUseStore'

export type DataResultState = {
  currentData: DataResult,
}

const INITIAL_STATE: any = {
  currentData: null
}

export const ApiDataReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(updateApiDataAction, (state, action) => {
      state.currentData = action.payload
    })
})

export const useApiDataStore = createUseStore<DataResultState, typeof rawOperations>(rawOperations, 'apiData')
