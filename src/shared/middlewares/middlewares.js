// @flow

import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import logger from './loggerMiddleware'

const middlewares = [
  logger,
  thunk,
]

export default applyMiddleware(...middlewares)
