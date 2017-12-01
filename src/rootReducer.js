import { combineReducers } from 'redux'

import game from './containers/Game/reducers/game'
import engine from './containers/Engine/reducers/engine'

const App = combineReducers({
  engine,
  game
})

export default App
