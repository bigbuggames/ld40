import React from 'react'
import styled from 'styled-components'

import AssetLoader from './containers/AssetLoader'
import AudioSource from './containers/AudioSource'
import Overlay from './containers/Overlay'

export default class Engine extends React.PureComponent {
  render() {
    return (
      <AssetLoader>
        <Overlay />
        {this.props.children}
      </AssetLoader>
    )
  }
}
