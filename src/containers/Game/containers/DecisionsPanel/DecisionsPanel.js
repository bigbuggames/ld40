import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { setChimsterAnimation } from '../Chimster/chimsterActions'
import { playSound } from 'engine/actions'

const Container = styled.div`
  display: flex;
`

const Box = styled.div`
  background-color: #E1E1E7;
  color: #7A7A8B;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #7A7A8B;
  border-radius: 10px;
  margin: 20px;
`

class DecisionsPanel extends React.Component {
  static propTypes = {
    setChimsterAnimation: propTypes.func
  }

  changeAnimation = (animation, sound) => {
    this.props.setChimsterAnimation(animation)
    this.props.playSound(sound)
  }

  render() {
    const { setChimsterAnimation } = this.props
    return (
      <Container>
        <Box onClick={() => this.changeAnimation('dead', 'lick-1')}>Dead</Box>
        <Box onClick={() => this.changeAnimation('run', 'lick-2')}>Run</Box>
        <Box onClick={() => this.changeAnimation('hang', 'factorEnergia')}>Hang</Box>
      </Container>
    )
  }
}

export default connect(null, {
  setChimsterAnimation,
  playSound
})(DecisionsPanel)
