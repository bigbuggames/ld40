import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components'

import { tryAnswer } from './tabletActions'

const Button = styled.div`
  color: #845D40;
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #845D40;
  border-radius: 10px;
  margin: 20px;
  z-index: 99;
`

class Tablet extends React.Component {

  handleNextLevel = () => {
    this.props.tryAnswer()
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleNextLevel}>NEXT LEVEL</Button>
      </div>
    )
  }
}

export default connect(null, {
  tryAnswer
})(Tablet)
