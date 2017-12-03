import { SET_ANSWER } from './actionTypes'
import { NEXT_LEVEL } from '../Shop/actionTypes'

export default (state = '', action) => {
  switch (action.type) {
    case SET_ANSWER:
      return action.payload.answer
    case NEXT_LEVEL:
      return ''
    default:
      return state
  }
}
