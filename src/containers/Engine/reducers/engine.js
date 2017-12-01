import { combineReducers } from 'redux'

import assets from '../containers/AssetLoader/assetLoaderReducer'
import audio from '../containers/AudioSource/audioSourceReducer'

export default combineReducers({
  assets,
  audio
})
