import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'

import rootReducer from './rootReducer'

import thunk from './middleware/thunk'
const logger =  createLogger({ 
  collapsed: true,
  predicate: (getState, action) => action.type !== undefined
})

const middleware = [
  logger,
  thunk
]

let composeEnhancers = compose
if (process.env.NODE_ENV !== 'production') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(...middleware))
)

export default store
