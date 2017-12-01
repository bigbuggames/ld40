import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components'

import { getChimsterState } from './chimsterSelectors'

import sprites from 'images/chimster.png'

const animations = {
  'dead': keyframes`
    from { background-position: 0 0; }
    to { background-position: -1489px 0; }
  `,
  'hang': keyframes`
    from { background-position: 0 -101px; }
    to { background-position: -923px -101px; }
  `,
  'run': keyframes`
    from { background-position: 0 -157px; }
    to { background-position: -1648px -157px; }
  `
}

const Dead = styled.div`
  width: 123px;
  height: 101px;
  background: url(${sprites});
  animation: ${animations['dead']} 0.75s steps(12) forwards;
`

const Hang = styled.div`
  width: 70px;
  height: 56px;
  background: url(${sprites}) left center;
  animation: ${animations['hang']} 0.75s steps(13) infinite;
`

const Run = styled.div`
  width: 101px;
  height: 75px;
  background: url(${sprites}) left center;
  animation: ${animations['run']} 0.6s steps(16) infinite;
`

const AnimationContainer = styled.div`
  margin-bottom: 50px;
  width: 123px;
  height: 101px;
  display: flex;
  justify-content: center;
  align-items: center;
`

class Chimster extends React.Component {
  static propTypes = {
    chimsterState: propTypes.string
  }

  animations = {
    'dead': <Dead />,
    'hang': <Hang />,
    'run': <Run />
  }

  render() {
    return (
      <AnimationContainer>
        {this.animations[this.props.chimsterState]}
      </AnimationContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  chimsterState: getChimsterState(state)
})

export default connect(mapStateToProps, null)(Chimster)
