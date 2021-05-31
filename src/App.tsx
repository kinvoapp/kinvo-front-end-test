/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { routes } from './routes'
import GlobalStyle from './styles/global'
import FullThemeLight from './styles/themes/themes'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={FullThemeLight}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          {routes.map((route: any) => (
            <Route
              key={route.name}
              path={route.path}
              exact
              component={route.component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
