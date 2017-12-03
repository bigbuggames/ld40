import React from 'react'
import { connect } from 'react-redux'
import styled, { injectGlobal } from 'styled-components'
import localForage from 'localforage'

import { getAssetsByType } from '../Engine/containers/AssetLoader/assetLoaderSelectors';
import { playSound, stopSound } from 'engine/actions'

import Shop from './containers/Shop'
import Translator from './containers/Translator'

import myradBoldIt from 'fonts/MyriadPro-BoldIt.otf';
import myradItalic from 'fonts/MyriadPro-It.otf';

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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
        <Shop />
        <Translator />
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
