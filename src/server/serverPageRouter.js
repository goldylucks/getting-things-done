// @flow

import renderApp from './render-app'

const routing = (app: Object) => {
  app.get('/', (req, res) => {
    const preloadedState = undefined
    res.send(renderApp(req.url, preloadedState))
  })

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url))
  })
}

export default routing
