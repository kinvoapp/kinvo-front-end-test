import React from 'react'
import { mount } from '../../config'
import { Provider } from 'react-redux'
import { HomePage } from '../../pages'
import { store } from '../../store'
import { ThemeProvider } from 'styled-components'
import FullThemeLight from '../../styles/themes/themes'
import { BrowserRouter, Switch } from 'react-router-dom'

describe('tests for microcard', () => {
  it('should be return title and subtitle correspond percent', () => {
    const wraper = mount(
      <ThemeProvider theme={FullThemeLight}>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <HomePage />
            </Switch>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    )
    expect(wraper.exists()).toBeTruthy()
    expect(wraper.find("[e-test='lay-title']").at(0).text()).toEqual(
      'Renda Fixa'
    )
  })
})
