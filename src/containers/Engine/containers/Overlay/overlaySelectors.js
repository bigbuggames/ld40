import get from 'lodash/get'

import overlayContent from 'globals/overlayContent'

export const isOverlayEnabled = (state) => {
  return get(state, 'engine.overlay.enabled')
}

export const getOverlayContent = (state) => {
  const step = get(state, 'engine.overlay.step')
  return overlayContent[step] || null
}

export const disableFade = (state) => {
  return get(state, 'engine.overlay.fadeDisabled')
}

export const getAlpha = (state) => {
  return get(state, 'engine.overlay.alpha')
}
