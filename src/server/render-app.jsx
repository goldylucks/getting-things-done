// @flow

import React from 'react'
import { Provider } from 'react-redux'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Helmet from 'react-helmet'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/utils'
import App from '../shared/App'

import initStore from './serverStore'

type args = {
  location: string,
  userAgent: string,
}

const renderApp = ({ location, userAgent }: args) => {
  const muiTheme = getMuiTheme({ userAgent })
  const store = initStore()
  const appHtml = ReactDOMServer.renderToString(
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        <StaticRouter location={location} context={{}}>
          <App />
        </StaticRouter>
      </Provider>
    </MuiThemeProvider>,
  )
  const head = Helmet.rewind()

  return (
    `<!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>`
  )
}

export default renderApp
