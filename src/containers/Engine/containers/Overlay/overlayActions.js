import {
  SHOW_OVERLAY,
  CLOSE_OVERLAY
} from './actionTypes'

export const showOverlay = (step) => ({
  type: SHOW_OVERLAY,
  payload: {
    step
  }
})

export const closeOverlay = () => ({
  type: CLOSE_OVERLAY
})
