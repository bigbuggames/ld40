import axios from 'axios'

import { 
  LOAD_ASSETS_PENDING,
  LOAD_ASSETS_SUCCESS,
  LOAD_ASSETS_ERROR,
  ASSET_LOADED
} from './actionTypes'

const getAssetUrls = () => {
  return axios.get('https://ld40-703cd.firebaseio.com/.json')
    .then((res) => {
      if (process.env.NODE_ENV !== 'production') {
        return res.data.map((asset) => ({ 
          ...asset, 
          url: `https://cors-anywhere.herokuapp.com/${asset.url}`
        }))
      }
      return res.data
    })
}

const loadAsset = (asset, dispatch) => {
  return axios({
    method: 'get',
    responseType: 'blob',
    url: asset.url
  })
  .then((file) => {
    dispatch({ 
      type: ASSET_LOADED, 
      payload: {
        name: asset.name,
        type: asset.type,
        blobUrl: URL.createObjectURL(file.data)
      }
    })
  })
}

export const loadAssets = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_ASSETS_PENDING })

    getAssetUrls()
      .then((assets) => {
        return axios.all(assets.map((asset) => loadAsset(asset, dispatch)))
      })
      .then((res) => dispatch({ type: LOAD_ASSETS_SUCCESS }))
      .catch((err) => dispatch({ type: LOAD_ASSETS_ERROR }))

  }
}

