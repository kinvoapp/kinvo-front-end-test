import { ApiData } from '../../types'
import { createAction } from '@reduxjs/toolkit'

export const API_DATA = '@API_DATA'

export type DataResult = ApiData | null

export const updateApiDataAction = createAction<DataResult>('@API_DATA')
