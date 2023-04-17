import { defineStore } from 'pinia'
import { IApp } from '../types/app'

interface INotification {
  show: boolean
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
}

export const useAppStore = defineStore('main', {
  state: (): IApp => ({
    app: 'gaqno development',
    darkMode: false,
    loading: false,
    notification: {
      message: '',
      show: false,
      type: 'info'
    }
  }),
  // optional getters
  getters: {
    isLoading: state => state.loading,
    isDarkMode: state => state.darkMode,
    isNotification: state => state.notification.show,
    getNotification: state => state.notification
  },
  // optional actions
  actions: {
    setNotification (payload: INotification) {
      this.notification = {
        show: payload.show,
        message: payload.message,
        type: payload.type
      }
    },
    closeNotification () {
      this.notification = {
        show: false,
        message: '',
        type: 'info'
      }
    }
  }
})
