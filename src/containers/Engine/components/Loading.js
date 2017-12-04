import React from 'react';
import styled from 'styled-components';

import GlyphAndText from '../../Game/components/GlyphAndText'

const AppContainer = styled.div`
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  text-align: center;  
`

export default class Loading extends React.Component {
  state = {
    text: 'Loading'
  }

  componentDidMount() {
    this.interval = setInterval(this.createRandomString, 100)
  }

  randomLetter = () => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    return letters.charAt(Math.floor(Math.random() * letters.length))
  }

  createRandomString = () => {
    const textArray = this.state.text.split('')
    const indexToChange = Math.floor(Math.random()*textArray.length)
    textArray[indexToChange] = this.randomLetter()
    this.setState({ text: textArray.join('') })
  }

  componentWillUnmount() {
    clearTimeout(this.interval)
  }

  render() {
    return (
      <AppContainer>
        <GlyphAndText text={this.state.text} size='40px' />
      </AppContainer>
    )
  }
}
