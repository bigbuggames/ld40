import { 
  CHANGE_CHIMSER_STATE
} from './actionTypes'

const initialState = {
  animation: 'run'
}

export default (state = initialState, action) => {
  switch (action.type) {

    case CHANGE_CHIMSER_STATE:
      return {
        ...state,
        animation: action.payload.animation
      }

    default:
      return state
  }
}
