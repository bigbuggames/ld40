import get from 'lodash/get'

export const isLoadingAssets = (state) => {
  return get(state, 'engine.assets.isLoadingAssets')
}
