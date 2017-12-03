import React from 'react'
import styled from 'styled-components'

import AssetLoader from './containers/AssetLoader'
import AudioSource from './containers/AudioSource'

export default class Engine extends React.PureComponent {
  render() {
    return (
      <AssetLoader>
        {this.props.children}
      </AssetLoader>
    )
  }
}
