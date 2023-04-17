interface App {
  app: string
  darkMode: boolean
  loading: boolean
  notification: {
    message: string
    show: boolean
    type: 'success' | 'error' | 'warning' | 'info'
  }
}