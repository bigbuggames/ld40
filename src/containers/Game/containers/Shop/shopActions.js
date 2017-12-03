import {
  LOAD_LEVELS,
  NEXT_LEVEL
} from './actionTypes'

export const loadLevels = (levels) => ({
  type: LOAD_LEVELS,
  payload: { 
    levels
  }
})

export const nextLevel= (levelName) => ({ 
  type: NEXT_LEVEL
})
