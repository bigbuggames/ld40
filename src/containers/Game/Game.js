import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { playSound, stopSound } from 'engine/actions'

import Chimster from './containers/Chimster/Chimster'
import DecisionsPanel from './containers/DecisionsPanel/DecisionsPanel'

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`

class Game extends React.Component {

  componentDidMount() {
    this.props.stopSound()
    this.props.playSound('main-song', 0.2)
  }

  render() {
    return (
      <Screen>
        <Chimster />
        <DecisionsPanel />
      </Screen>
    )
  }
}

export default connect(null, {
  playSound,
  stopSound
})(Game)
