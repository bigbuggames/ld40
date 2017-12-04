import {
  SHOW_OVERLAY,
  CLOSE_OVERLAY
} from './actionTypes'

const initialState = {
  enabled: false,
  fadeDisabled: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_OVERLAY:
      return {
        enabled: true,
        step: action.payload.step,
        fadeDisabled: action.payload.instant,
        alpha: action.payload.alpha
      }

    case CLOSE_OVERLAY: 
      return {
        enabled: false,
        fadeDisabled: false,
        step: undefined
      }

    default:
      return state
  }
}
