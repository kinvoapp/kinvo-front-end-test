/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/**
 * Action types
 */
export enum NotifyTypes {
  SET_LOADING = '@Notifyactive/SET_LOADING',
  SET_MESSAGE = '@Notifyactive/SET_MESSAGE'
}

/**
 * Data types
 */
export interface Notify {
  message: {
    severity: 'success' | 'info' | 'warning' | 'error' | undefined
    active: boolean
    message: string
  }

  loading: boolean
}

/**
 * State type
 */
export interface NotifyState {
  message: {
    severity: 'success' | 'info' | 'warning' | 'error' | undefined
    active: boolean
    errorType: 'auth' | string
    successType?: 'auth' | 'like' | string
    message: string
  }

  loading: boolean
}
