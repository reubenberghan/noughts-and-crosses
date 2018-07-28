import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { App } from './components'
import { checkForWinEpic, initialState, rootReducer } from './state'
import registerServiceWorker from './registerServiceWorker'

const epicMiddleware = createEpicMiddleware()
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(epicMiddleware),
    window && window.devToolsExtension && window.devToolsExtension()
  )
)

epicMiddleware.run(checkForWinEpic)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
