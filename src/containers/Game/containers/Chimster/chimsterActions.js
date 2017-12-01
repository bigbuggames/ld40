import { 
  CHANGE_CHIMSER_STATE
} from './actionTypes'

export const setChimsterAnimation= (animation) => {
  return {
    type: CHANGE_CHIMSER_STATE,
    payload: {
      animation: animation
    }
  }
}
