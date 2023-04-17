import { defineStore } from 'pinia'
import { IApp } from '../types/app'

interface INotification {
  show: boolean
  message: string
  icon: string
  type: 'success' | 'error' | 'warning' | 'info'
}

export const useAppStore = defineStore('main', {
  state: (): IApp => ({
    app: 'gaqno development',
    darkMode: false,
    loading: false,
    modal: {
      show: false,
      title: '',
      template: '',
      data: {}
    },
    notification: {
      message: '',
      icon: '',
      show: false,
      type: 'info'
    }
  }),
  getters: {
    isLoading: state => state.loading,
    isModal: state => state.modal.show,
    isDarkMode: state => state.darkMode,
    isNotification: state => state.notification.show,
    getNotification: state => state.notification
  },
  actions: {
    setNotification (payload: INotification) {
      this.notification = {
        show: payload.show,
        message: payload.message,
        icon: payload.icon,
        type: payload.type
      }
    },
    setModal (payload: any) {
      this.modal = {
        show: payload.show,
        title: payload.title,
        template: payload.template,
        data: payload.data
      }
    },
    closeModal () {
      this.modal = {
        show: false,
        title: '',
        template: '',
        data: {}
      }
    },
    closeNotification () {
      this.notification = {
        show: false,
        message: '',
        icon: '',
        type: 'info'
      }
    }
  }
})
