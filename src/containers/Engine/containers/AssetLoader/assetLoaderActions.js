/* eslint-disable no-console */

import axios from 'axios'
import localForage from 'localforage'

import { 
  LOAD_ASSETS_PENDING,
  LOAD_ASSETS_SUCCESS,
  LOAD_ASSETS_ERROR
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

const loadAsset = (asset) => {
  console.log(`LOADING ${asset.name}...`)
  return axios({
    method: 'get',
    responseType: 'blob',
    url: asset.url
  })
  .then((file) => localForage.setItem(asset.name, file.data))
  .catch((err) => console.error(err))
}

export const loadAssets = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_ASSETS_PENDING })

    axios
      .all(assets.map((asset) => loadAsset(asset)))
      .then((res) => dispatch({ type: LOAD_ASSETS_SUCCESS }))
      .catch((err) => dispatch({ type: LOAD_ASSETS_ERROR }))
  }
}

