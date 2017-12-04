import get from 'lodash/get'

export const getCurrentLevel = (state) => {
  const index = get(state, 'game.shop.currentLevel')
  return get(state, `game.shop.levels[${index}]`, {})
}

export const getMoodLevel = (state) => get(state, 'game.shop.mood')

const getInfo = (state, key) => {
  const current = get(state, 'game.shop.currentLevel')
  const levels = get(state, 'game.shop.levels', []);
  return levels.reduce((acc, level, i) => {
    if (i <= current) {
      return [
        ...acc, 
        ...level.notes[key]
      ]
    }
    return acc
  }, [])
}

export const getGrammar = (state) => getInfo(state, 'grammar')
export const getDictionary = (state) => getInfo(state, 'dictionary')

export const isPreping = (state) => get(state, 'game.shop.preping', false)
export const isGameOver = (state) => get(state, 'game.shop.gameOver', false)
export const hasCompletedGame = (state) => get(state, 'game.shop.completed', false)
