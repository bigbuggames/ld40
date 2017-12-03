import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import localForage from 'localforage'

import { getAssetsByType, getAssetsById } from '../Engine/containers/AssetLoader/assetLoaderSelectors';
import { playSound, stopSound } from 'engine/actions'

import Shop from './containers/Shop'

class Game extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.allLoadedVideos.includes('idle-neutral'))
  }

  render() {
    return <Shop />
  }
}

export default connect((state) => {
  return {
    videos: getAssetsById(state),
    allLoadedVideos: getAssetsByType(state, 'video/mp4')
  }
}, {
  playSound,
  stopSound
})(Game)
