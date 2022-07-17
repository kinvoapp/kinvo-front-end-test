import React from 'react'
import 'swiper/css'
import './index.css'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import './assets/TTCommons/FontFace.css'
import { kinvoTheme } from './utils/theme'
import { ThemeProvider } from '@mui/material'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={kinvoTheme}>
      <App />
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>
)

reportWebVitals()
