import React from 'react'
import { connect } from 'react-redux'
import styled, { injectGlobal } from 'styled-components'
import localForage from 'localforage'

import { getAssetsByType } from '../Engine/containers/AssetLoader/assetLoaderSelectors'
import { playSound, stopSound } from 'engine/actions'

import Shop from './containers/Shop'
import Translator from './containers/Translator'

import myradBoldIt from 'fonts/MyriadPro-BoldIt.otf'
import myradItalic from 'fonts/MyriadPro-It.otf'

import still from 'images/still.png'

injectGlobal`
  @font-face {
    font-family: 'myrad';
    src: url(${myradBoldIt}) format('opentype');
    font-weight: bold;
    font-style: bold;
  }
`;

injectGlobal`
  @font-face {
    font-family: 'myrad';
    src: url(${myradItalic}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
`;

const Screen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GameContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ShopContainer = styled.div`
  width: 684px;
  height: 684px;
  background: url(${still});
  background-size: cover;
`

const TabletContainer = styled.div`
  height: 750px;
  width: 600px;
  margin-left: 50px;
`

class Game extends React.Component {

  componentDidMount() {
    window.ondragstart = function() { return false; } 
  }

  // FIXME: Loading logic should be here
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.allLoadedVideos.includes('idle-neutral'))
  }

  render() {
    return (
      <Screen>
        <GameContainer>

          <ShopContainer>
            <Shop />
          </ShopContainer>

          <TabletContainer>
            <Translator />
          </TabletContainer>

        </GameContainer>
      </Screen>
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
