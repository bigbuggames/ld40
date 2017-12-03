import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import localForage from 'localforage'

import { getAssetsByType } from '../Engine/containers/AssetLoader/assetLoaderSelectors';
import { playSound, stopSound } from 'engine/actions'

import Shop from './containers/Shop'
import Translator from './containers/Translator'

class Game extends React.Component {

  // FIXME: Loading logic should be here
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.allLoadedVideos.includes('idle-neutral'))
  }

  render() {
    return (
      <div>
        <Shop />
        <Translator />
      </div>
    )
  }
}

export default connect((state) => {
  return {
    allLoadedVideos: getAssetsByType(state, 'video/mp4')
  }
}, {
  playSound,
  stopSound
})(Game)
