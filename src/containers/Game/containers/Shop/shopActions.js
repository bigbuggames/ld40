import {
  LOAD_LEVELS,
  NEXT_LEVEL,
  PREPING_SUCCESS
} from './actionTypes'

export const loadLevels = (levels) => ({
  type: LOAD_LEVELS,
  payload: { 
    levels
  }
})

export const nextLevel = () => ({ 
  type: NEXT_LEVEL
})

export const finishedPreping = () => ({
  type: PREPING_SUCCESS
})
