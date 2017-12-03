import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components'

import { loadLevels, nextLevel } from './shopActions'
import { getCurrentLevel, getMoodLevel } from './shopSelectors'
import { 
  getAssetsById, 
  getAssetsByType, 
  getLoadedIds 
} from '../../../Engine/containers/AssetLoader/assetLoaderSelectors'

import levels from 'globals/levels'

const VideoFrame = styled.div`
  max-width: 1280px;  
  max-height: 720px;
`

const Button = styled.div`
  color: #845D40;
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #845D40;
  border-radius: 10px;
  margin: 20px;
  z-index: 99;
`

class Shop extends React.Component {
  componentDidMount() {
    this.props.loadLevels(levels)
  }

  // FIXME: This could be a selector
  requiredAssetsLoaded = (loaded, required) => {
    return required
      .map((asset) => loaded.includes(asset))
      .includes(true)
  }

  render() {
    const { level, videos } = this.props
    if (level) {
      const blobUrl = videos[level.prep]
      return (
        <div>
          <VideoFrame>
            <video autoPlay loop src={blobUrl} />
          </VideoFrame>
        </div>
      )
    } else {
      return null
    }
  }
}

export default connect((state) => ({
  level: getCurrentLevel(state),
  videos: getAssetsById(state),
  loadedVideos: getAssetsByType(state, 'video/mp4'),
  loadedAssets: getLoadedIds(state),
  moodLevel: getMoodLevel(state)
}), {
  loadLevels
})(Shop)
