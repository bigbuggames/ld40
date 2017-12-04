import { 
  SET_ANSWER,
  TRY_ANSWER 
} from './actionTypes'

import { 
  NEXT_LEVEL,
  GAME_COMPLETED,
  GAME_OVER,
  DECREASE_MOOD,
  PREPING_PENDING
} from '../Shop/actionTypes'

export const setAnswer = (text) => ({
  type: SET_ANSWER,
  payload: {
    answer: text
  }
})

export const tryAnswer = (answer) => {
  return (dispatch, getState) => {
    if (answer === '') { return }    

    const { currentLevel, levels, mood, gameOver, preping } = getState().game.shop

    // Avoid user interaction when not needed
    if (gameOver || preping) { return }

    if (mood === 0) {
      return dispatch({ type: GAME_OVER })
    }

    // Check if solution is correct
    const level = levels[currentLevel]    
    if (level.solution === answer) {
      dispatch({ type: PREPING_PENDING })
    } else {
      dispatch({ type: DECREASE_MOOD })
    }

  }
}
