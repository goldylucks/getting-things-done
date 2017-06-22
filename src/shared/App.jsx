// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectTapEventPlugin from 'react-tap-event-plugin'

import { APP_NAME } from './config'
import Header from './components/Header'
import Sidebar from './Sidebar'

// Needed for onTouchTap
// Required by material-ui
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const App = () => (
  <div className="main-container site">
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Header />
    <div>
      <Sidebar />
    </div>
  </div>
)

export default App
