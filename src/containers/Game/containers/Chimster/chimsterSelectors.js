import get from 'lodash/get'

export const getChimsterState = (state) => {
  return get(state, 'game.chimster.animation', 'run')
}
