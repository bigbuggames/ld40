import { 
  SET_ANSWER,
  TRY_ANSWER 
} from './actionTypes'

import { 
  NEXT_LEVEL,
  THE_END,
  GAME_OVER,
  DECREASE_MOOD
} from '../Shop/actionTypes'

export const setAnswer = (text) => ({
  type: SET_ANSWER,
  payload: {
    answer: text
  }
})

export const tryAnswer = (answer) => {
  return (dispatch, getState) => {

    const { currentLevel, levels, mood } = getState().game.shop
    const level = levels[currentLevel]

    if (mood === 0) {
      return dispatch({ type: GAME_OVER })
    }

    // Check if solution is correct
    if (level.solution === answer) {
      if (currentLevel === levels.length - 1) {
        dispatch({ type: THE_END })
      } else {
        dispatch({ type: NEXT_LEVEL })
      }
    } else {
      dispatch({ type: DECREASE_MOOD })
    }

  }
}
