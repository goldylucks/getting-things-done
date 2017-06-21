// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { APP_SELECTOR } from '../shared/config'
import App from '../shared/App'

import store from './clientStore'

const render = (AppComponent, reduxStore) => {
  ReactDOM.render(
    <Provider store={reduxStore}>
      <BrowserRouter>
        <MuiThemeProvider>
          <AppContainer>
            <AppComponent />
          </AppContainer>
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>,
    document.querySelector(APP_SELECTOR),
  )
}

render(App, store)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('../shared/App', () => {
    const NextApp = require('../shared/App').default // eslint-disable-line global-require
    render(NextApp, store)
  })
}
