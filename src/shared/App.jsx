// @flow

import React from 'react'
import Helmet from 'react-helmet'

import { APP_NAME } from './config'

const App = () => (
  <div className="main-container site">
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <h1>Welcome to the app!</h1>
  </div>
)

export default App
