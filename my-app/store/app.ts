import { defineStore } from 'pinia'

interface Notification {
  show: boolean
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
}

export const useAppStore = defineStore('main', {
  state: () => ({
    app: 'gaqno development',
    darkMode: false,
    loading: false,
    notification: {
      show: false,
      message: '',
      type: 'success'
    } as Notification,

  }),
  // optional getters
  getters: {
    isLoading: (state) => state.loading,
    isDarkMode: (state) => state.darkMode,
    notification: (state) => state.notification,
  },
  // optional actions
  actions: {
    setNotification(payload: Notification) {
      this.notification = payload
    }
  },
})
