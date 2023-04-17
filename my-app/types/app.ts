export interface IApp {
  app: string
  darkMode: boolean
  loading: boolean
  modal: {
    show: false,
    title: '',
    template: '',
    data: {}
  }
  notification: {
    message: string
    show: boolean
    icon: string
    type: 'success' | 'error' | 'warning' | 'info'
  }
}
