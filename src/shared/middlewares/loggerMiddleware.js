// @flow

import { createLogger } from 'redux-logger'

import { isProd } from '../utils'

global.IS_LOGGING = !isProd

const loggerMiddleware = createLogger({
  predicate: () => global.IS_LOGGING,
  collapsed: true,
})

export default loggerMiddleware
