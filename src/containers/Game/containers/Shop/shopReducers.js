import {
  LOAD_LEVELS,
  NEXT_LEVEL,
  INCREASE_MOOD,
  DECREASE_MOOD
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

export default combineReducers({
  currentLevel,
  levels,
  mood
})
