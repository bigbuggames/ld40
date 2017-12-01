import { 
  SETUP_AUDIO_PENDING,
  SETUP_AUDIO_SUCCESS,
  SETUP_AUDIO_ERROR
} from './actionTypes'

const initialState = {
  audioEnabled: false
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SETUP_AUDIO_PENDING:
      return {
        ...state,
        audioEnabled: false
      }

    case SETUP_AUDIO_SUCCESS:
      return {
        ...state,
        audioEnabled: true
      }

    case SETUP_AUDIO_ERROR:
      return {
        ...state,
        audioEnabled: false
      }

    default:
      return state
  }
}
