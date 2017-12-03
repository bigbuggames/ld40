import { TRY_ANSWER } from './actionTypes'

import { NEXT_LEVEL } from '../Shop/actionTypes'

/*
export const tryAnswer = (answer) => {
  return (dispatch, getState) => {

    // Check if solution is correct

    // Move to the next step in case it is

    // Decrease


  }
}
*/

export const tryAnswer = (answer) => ({ 
  type: NEXT_LEVEL,
  payload: {
    answer
  }
})
