import get from 'lodash/get'

export const getAnswer = (state) => get(state, 'game.answer', '')
