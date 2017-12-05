import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components'

import { 
  loadLevels,
  nextLevel, 
  finishedPreping,
  gameOverOverlay,
  gameCompletedOverlay
} from './shopActions'

import { 
  getCurrentLevel, 
  getMoodLevel, 
  isPreping, 
  isGameOver, 
  hasCompletedGame
} from './shopSelectors'

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

  idleMode = (videos, moodLevel) => {
    if (moodLevel < 4) {
      return videos['idle-angry']
    } else if (moodLevel >= 6) {
      return videos['idle-happy']
    } else {
      return videos['idle-neutral']
    }
  }

  handlePrepEnd = () => {
    this.props.finishedPreping()
    this.props.nextLevel()
    this.forceUpdate()
  }

  handleGameOver = () => {
    this.props.gameOverOverlay()
  }

  handleWinCondition = () => {
    this.props.gameCompletedOverlay()
  }

  render() {
    const { level, videos, moodLevel, preping, gameOver, completed } = this.props

    // Handle game over animation
    if (gameOver) {
      return (
        <VideoFrame>
          <video 
            autoPlay
            src={videos['game-over']} 
            onEnded={this.handleGameOver}
          />
        </VideoFrame>
      )
    }

    if (completed) {
      return (
        <VideoFrame>
          <video 
            autoPlay
            src={videos[level.prep]} 
            onEnded={this.handleWinCondition} 
          />
        </VideoFrame>
      )
    }

    // Handle prep animations
    if (preping) {
      return (
        <VideoFrame>
          <video 
            autoPlay 
            src={videos[level.prep]}
            volume={0.5}
            onEnded={this.handlePrepEnd} 
          />
        </VideoFrame>
      )
    }

    // Handle idle modes by default
    return (
      <VideoFrame>
        <video 
          autoPlay 
          loop 
          src={this.idleMode(videos, moodLevel)} 
        />
      </VideoFrame>
    )

  }
}

export default connect((state) => ({
  level: getCurrentLevel(state),
  videos: getAssetsById(state),
  loadedVideos: getAssetsByType(state, 'video/mp4'),
  loadedAssets: getLoadedIds(state),
  moodLevel: getMoodLevel(state),
  preping: isPreping(state),
  gameOver: isGameOver(state),
  completed: hasCompletedGame(state)
}), {
  loadLevels,
  finishedPreping,
  nextLevel,
  gameOverOverlay,
  gameCompletedOverlay
})(Shop)
