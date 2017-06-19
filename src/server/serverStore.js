// @flow

import { createStore } from 'redux'

import mainReducer from '../shared/mainReducer'
import middlewares from '../shared/middlewares'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  return createStore(
    mainReducer,
    preloadedState,
    middlewares,
  )
}

export default initStore
