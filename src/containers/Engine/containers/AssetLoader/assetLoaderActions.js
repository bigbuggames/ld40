/* eslint-disable no-console */

import axios from 'axios'
// import localForage from 'localforage'

import { 
  LOAD_ASSETS_PENDING,
  LOAD_ASSETS_SUCCESS,
  LOAD_ASSETS_ERROR,
  ASSET_LOADED
} from './actionTypes'

import assetUrls from 'globals/assetUrls'

let assets = assetUrls;
if (process.env.NODE_ENV !== 'production') {
  assets = assetUrls.map((asset) => { 
    return {
      ...asset, 
      url: `https://cors-anywhere.herokuapp.com/${asset.url}`
    }
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
    // return localForage.setItem(asset.name, file.data)
  })
  .catch((err) => console.error(err))
}

export const loadAssets = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_ASSETS_PENDING })

    axios
      .all(assets.map((asset) => loadAsset(asset, dispatch)))
      .then((res) => dispatch({ type: LOAD_ASSETS_SUCCESS }))
      .catch((err) => dispatch({ type: LOAD_ASSETS_ERROR }))
  }
}

