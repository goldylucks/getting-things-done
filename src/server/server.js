// @flow

require('dotenv').config()

/* eslint-disable import/first */
import express from 'express'
import mongoose from 'mongoose'

import { STATIC_PATH } from '../shared/config'

import serverConfig from './serverConfig'
import serverLogger from './serverUtils/serverLogger'
import pageRouter from './serverPageRouter'
import middlewares from './serverMiddlewares'
/* eslint-enable import/first */

mongoose.Promise = global.Promise
const app = express()
mongoose.connect(serverConfig.dbUrl)

middlewares.app(app)

app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

pageRouter(app)

app.use(middlewares.error)
app.use(middlewares.notFound)

// avoid crash on test watch mode
if (!module.parent) {
  app.listen(serverConfig.port, () => {
    serverLogger.log(`Server listening on ${serverConfig.port} ${serverConfig.env}`)
    serverLogger.log('Keep "yarn dev:wds" running in another terminal')
  })
}

export default app // for testing
