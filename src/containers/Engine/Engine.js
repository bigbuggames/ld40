import React from 'react'

import AssetLoader from './containers/AssetLoader'
import AudioSource from './containers/AudioSource'

export default class Engine extends React.PureComponent {
  render() {
    return (
      <AssetLoader>
        <AudioSource>
          {this.props.children}
        </AudioSource>
      </AssetLoader>
    )
  }
}
