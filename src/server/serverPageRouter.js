// @flow

import renderApp from './render-app'

const routing = (app: Object) => {
  app.get('/', (req, res) => {
    res.send(renderApp({ location: req.url, userAgent: req.headers['user-agent'] }))
  })

  app.get('*', (req, res) => {
    res.status(404).send(renderApp({ location: req.url, userAgent: req.headers['user-agent'] }))
  })
}

export default routing
