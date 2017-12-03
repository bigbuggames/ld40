import { TRY_ANSWER } from './actionTypes'

import { 
  NEXT_LEVEL,
  INCREASE_MOOD,
  DECREASE_MOOD
} from '../Shop/actionTypes'

export const tryAnswer = (answer) => {
  return (dispatch, getState) => {

    const { currentLevel, levels } = getState().game.shop

    // Check if solution is correct
    if (levels[currentLevel].solution === answer) {
      dispatch({ type: INCREASE_MOOD })
      dispatch({ type: NEXT_LEVEL })
    } else {
      dispatch({ type: DECREASE_MOOD })
    }


    // Move to the next step in case it is

    // Decrease


  }
}
