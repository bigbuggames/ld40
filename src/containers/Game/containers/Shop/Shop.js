import React from 'react'
import propTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const VideoFrame = styled.div`
  max-width: 1280px;  
  max-height: 720px;
`

export default class Shop extends React.Component {
  static propTypes = {
    url: propTypes.string
  }

  render() {
    return (
      <VideoFrame>
        <video id='shop' autoPlay loop>
          <source src={this.props.url} type='video/mp4' />
          Your browser does not support HTML5 video
        </video>
      </VideoFrame>
    )
  }
}
