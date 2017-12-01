import get from 'lodash/get'

export const isAudioEnabled = (state) => {
  return get(state, 'engine.audio.audioEnabled')
}
