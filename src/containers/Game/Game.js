import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import localForage from 'localforage'

import { playSound, stopSound } from 'engine/actions'

import Chimster from './containers/Chimster/Chimster'
import DecisionsPanel from './containers/DecisionsPanel/DecisionsPanel'
import { getAssetsByType } from '../Engine/containers/AssetLoader/assetLoaderSelectors';

class Game extends React.Component {

  componentDidMount() {

    /*
    localForage.getItem('test-video')
    
    .then((binary) => {  
      const blob = new Blob([binary], { type : 'video/mp4' })
      this.setState({
        videoUrl: URL.createObjectURL(blob)
      })
    })

    .then(() => localForage.getItem('test-video-gif'))

    .then((binary) => {
      const blob = new Blob([binary], { type : 'image/gif' })
      this.setState({
        gifUrl: URL.createObjectURL(blob),
        videoLoaded: true
      })
    })

    .catch((error) => {
      console.log(error)
    })
    */

    /*
    this.props.stopSound()
    this.props.playSound('main-song', 0.2)
    */
  }

  /*

    {
      this.state.videoLoaded && (
        <div>
          <video id='superVideo' autoPlay loop>
            <source src={this.state.videoUrl} type='video/mp4' />
            Your browser does not support HTML5 video
          </video>
          <img src={this.state.gifUrl} />
        </div>
      )
    }
  */

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.allLoadedVideos.includes('idle-neutral'))
  }

  render() {
    return (
      <ul>
        {
          this.props.allLoadedVideos.map((video) => {
            return <li>{video}</li>
          })
        }
      </ul>
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
