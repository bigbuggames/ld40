import {
  LOAD_LEVELS,
  NEXT_LEVEL,
  DECREASE_MOOD,
  PREPING_PENDING,
  PREPING_SUCCESS,
  GAME_COMPLETED,
  GAME_OVER,
  RESET_GAME
} from './actionTypes'
import { combineReducers } from 'redux'

const currentLevel = (state = 0, action) => {
  switch (action.type) {
    case NEXT_LEVEL:
      return state + 1
    default:
      return state
  }
}

const levels = (state = [], action) => {
  switch (action.type) {
    case LOAD_LEVELS:
      return action.payload.levels
    default:
      return state
  }
}

const mood = (state = 5, action) => {
  switch (action.type) {
    case NEXT_LEVEL:
      return state + 1
    case DECREASE_MOOD:
      return state - 1
    default:
      return state
  }
}

const preping = (state = false, action) => {
  switch (action.type) {
    case GAME_COMPLETED:
      return true
    case PREPING_PENDING:
      return true
    case PREPING_SUCCESS:
      return false
    default:
      return state
  }
}

const gameOver = (state = false, action) => {
  switch (action.type) {
    case GAME_OVER:
      return true
    case RESET_GAME:
      return false
    default:
      return state
  }
}

const completed = (state = false, action) => {
  switch (action.type) {
    case GAME_COMPLETED:
      return true
    case RESET_GAME:
      return false
    default:
      return state
  }
}


export default combineReducers({
  currentLevel,
  levels,
  mood,
  preping,
  gameOver,
  completed
})
