import React from 'react'
import styled from 'styled-components'

import AssetLoader from './containers/AssetLoader'
import AudioSource from './containers/AudioSource'

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default class Engine extends React.PureComponent {
  render() {
    return (
      <AssetLoader>
        <Screen>
          {this.props.children}
        </Screen>
      </AssetLoader>
    )
  }
}
