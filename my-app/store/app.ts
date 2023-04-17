import { defineStore } from 'pinia'

interface INotification {
  show: boolean
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
}

export const useAppStore = defineStore('main', {
  state: (): App => ({
    app: 'gaqno development',
    darkMode: false,
    loading: false,
    notification: {
      message: '',
      show: false,
      type: 'info'
    },
  }),
  // optional getters
  getters: {
    isLoading: (state) => state.loading,
    isDarkMode: (state) => state.darkMode,
    getNotification: (state) => state.notification,
  },
  // optional actions
  actions: {
    setNotification(payload: INotification) {
      this.notification = {
        show: payload.show,
        message: payload.message,
        type: payload.type
      }
    }
  },
})
