// @flow

import { createStore, compose } from 'redux'

import mainReducer from '../shared/mainReducer'
import { isProd } from '../shared/utils'
import middlewares from '../shared/middlewares'

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const preloadedState = window.__PRELOADED_STATE__
/* eslint-disable no-underscore-dangle */

const clientStore = createStore(
  mainReducer,
  preloadedState,
  composeEnhancers(middlewares),
)

export default clientStore
