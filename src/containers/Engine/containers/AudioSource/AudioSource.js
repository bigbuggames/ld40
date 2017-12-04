import React from 'react'
import { connect } from 'react-redux'
import { object, bool, func } from 'prop-types'
import { Howl } from 'howler'

import { setupAudioSources } from './audioSourceActions'
import { isAudioEnabled } from './audioSourceSelectors'
import { getAssetsByType, getAssetsById } from '../AssetLoader/assetLoaderSelectors'

import audioSprites from 'globals/audioSprites'

import Loading from '../../components/Loading'

class AudioPlayer extends React.Component {
  static propTypes = {
    children: object,
    audioEnabled: bool,
    setupAudioSources: func
  }

  createAudioSource = (blobUrl) => {
    return new Howl({
      src: [blobUrl],
      format: ['mp3'],
      sprite: audioSprites
    })
  }
  
  componentDidMount() {

    const { audioAssets, assetsById } = this.props

    const blobUrl = assetsById[audioAssets[0]]
    window.audioSource = this.createAudioSource(blobUrl)

    // const blob = new Blob([binary], { type: 'audio/mp3' })
    // const blobUrl = URL.createObjectURL(blob)

    // this.props.setupAudioSources(this.props.audioAssets)
  }

  render () {
    return this.props.children
    /*
    if (this.props.audioEnabled) {
      return this.props.children
    } else {
      return null
    }
    */
  }
}

export default connect((state) => ({
  audioEnabled: isAudioEnabled(state),
  audioAssets: getAssetsByType(state, 'audio/mp3'),
  assetsById: getAssetsById(state)
}), {
  setupAudioSources
})(AudioPlayer)
