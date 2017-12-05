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

    /*
    window.audioSource.on('end', () => {
      if (level.solution === answer) {
        if (currentLevel !== levels.length - 1) {
          dispatch({ type: PREPING_PENDING })
        }
      } else {
        dispatch({ type: DECREASE_MOOD })
      }
    })
    */

    if (mood === 0) {
      return dispatch({ type: GAME_OVER })
    }

    window.audioSource.volume(0.6)

    // Check if solution is correct
    const level = levels[currentLevel]    
    if (level.solution === answer) {

      // Disable the input when preping
      document.onkeydown = () => {}

      // Checking if the current level is the last one
      if (currentLevel === levels.length - 1) {
        const id = window.audioSource.play('petrifax')
        dispatch({ type: GAME_COMPLETED })
      } else {
        const id = window.audioSource.play(level.prep)
        dispatch({ type: PREPING_PENDING })
      }
      
    } else {
      const randomNum = Math.trunc((Math.random() * 6) + 1)
      const id = window.audioSource.play(`error${randomNum}`)
      dispatch({ type: DECREASE_MOOD })
    }

  }
}
