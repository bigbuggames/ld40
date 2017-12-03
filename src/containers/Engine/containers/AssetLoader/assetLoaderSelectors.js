import get from 'lodash/get'

export const isLoadingAssets = (state) => {
  return get(state, 'engine.assets.loading')
}

export const getLoadedIds = (state) => {
  return get(state, 'engine.assets.loaded')
}

export const getAssetsByType = (state, type) => {
  return get(state, `engine.assets.byType[${type}]`, [])
}

export const getAssetsById = (state) => {
  return get(state, 'engine.assets.byId', {})
}
