import get from 'lodash/get'

export const getCurrentLevel = (state) => {
  const index = get(state, 'game.shop.currentLevel')
  return get(state, `game.shop.levels[${index}]`)
}
