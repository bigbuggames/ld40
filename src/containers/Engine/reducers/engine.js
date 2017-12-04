import { combineReducers } from 'redux'

import assets from '../containers/AssetLoader/assetLoaderReducer'
import audio from '../containers/AudioSource/audioSourceReducer'

import overlay from '../containers/Overlay/overlayReducer'

export default combineReducers({
  assets,
  audio,
  overlay
})
