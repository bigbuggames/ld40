import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './initializeStore'

import Engine from './containers/Engine'
import Game from './containers/Game'

import './main.css'

render(
  <Provider store={store}>
    <Engine>
      <Game />
    </Engine>
  </Provider>,
  document.getElementById('root')
)

if (process.env.NODE_ENV !== 'production') {

  // Attaching the store to the global window object to mess with it
  window.store = store 

  // Enables hot module reloading
  if(module.hot) {
    module.hot.accept();
  }
}
